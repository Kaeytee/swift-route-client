
# Logistics Application - Backend Integration Guide

This guide outlines how to integrate your backend APIs with the frontend application. The application is built with React, Vite, and TailwindCSS, designed with modular architecture to easily connect with any backend system.

## General API Integration Pattern

All API calls should follow this general pattern:

```javascript
// Example API call pattern
import { useQuery, useMutation } from '@tanstack/react-query';

// Fetch data from API
export const useGetShipments = () => {
  return useQuery({
    queryKey: ['shipments'],
    queryFn: async () => {
      const response = await fetch('YOUR_API_ENDPOINT/shipments', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch shipments');
      }
      
      return response.json();
    }
  });
};

// Post data to API
export const useCreateShipment = () => {
  return useMutation({
    mutationFn: async (shipmentData) => {
      const response = await fetch('YOUR_API_ENDPOINT/shipments', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shipmentData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create shipment');
      }
      
      return response.json();
    }
  });
};
```

## Key API Endpoints to Implement

### Authentication

1. **Login**
   - Endpoint: `/api/auth/login`
   - Method: POST
   - Body: `{ email: string, password: string }`
   - Response: `{ token: string, user: UserObject }`

2. **Register**
   - Endpoint: `/api/auth/register`
   - Method: POST
   - Body: `{ name: string, email: string, password: string, ... }`
   - Response: `{ token: string, user: UserObject }`

3. **Get Current User**
   - Endpoint: `/api/auth/me`
   - Method: GET
   - Headers: `Authorization: Bearer {token}`
   - Response: `{ user: UserObject }`

### Shipments

1. **Create Shipment**
   - Endpoint: `/api/shipments`
   - Method: POST
   - Headers: `Authorization: Bearer {token}`
   - Body: `{ origin: Address, destination: Address, items: Item[], ... }`
   - Response: `{ shipment: ShipmentObject }`

2. **Get All Shipments**
   - Endpoint: `/api/shipments`
   - Method: GET
   - Headers: `Authorization: Bearer {token}`
   - Query Parameters: `status`, `page`, `limit`
   - Response: `{ shipments: ShipmentObject[], total: number, pages: number }`

3. **Get Awaiting Shipments**
   - Endpoint: `/api/shipments/awaiting`
   - Method: GET
   - Headers: `Authorization: Bearer {token}`
   - Response: `{ shipments: ShipmentObject[] }`

4. **Get Shipment History**
   - Endpoint: `/api/shipments/history`
   - Method: GET
   - Headers: `Authorization: Bearer {token}`
   - Query Parameters: `page`, `limit`, `dateFrom`, `dateTo`
   - Response: `{ shipments: ShipmentObject[], total: number, pages: number }`

5. **Get Shipment Details**
   - Endpoint: `/api/shipments/{id}`
   - Method: GET
   - Headers: `Authorization: Bearer {token}`
   - Response: `{ shipment: ShipmentObject }`

6. **Update Shipment**
   - Endpoint: `/api/shipments/{id}`
   - Method: PUT
   - Headers: `Authorization: Bearer {token}`
   - Body: `{ status: string, trackingInfo: Object, ... }`
   - Response: `{ shipment: ShipmentObject }`

### Wallet

1. **Get Wallet Balance**
   - Endpoint: `/api/wallet`
   - Method: GET
   - Headers: `Authorization: Bearer {token}`
   - Response: `{ balance: number, currency: string }`

2. **Fund Wallet**
   - Endpoint: `/api/wallet/fund`
   - Method: POST
   - Headers: `Authorization: Bearer {token}`
   - Body: `{ amount: number, paymentMethod: string, ... }`
   - Response: `{ transaction: TransactionObject, newBalance: number }`

3. **Get Transaction History**
   - Endpoint: `/api/wallet/transactions`
   - Method: GET
   - Headers: `Authorization: Bearer {token}`
   - Query Parameters: `page`, `limit`, `type`
   - Response: `{ transactions: TransactionObject[], total: number, pages: number }`

## Data Models

Here are the core data models that your API should return:

```typescript
// User model
interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'admin' | 'driver';
  createdAt: string;
  // Additional user properties
}

// Address model
interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  contactName?: string;
  contactPhone?: string;
}

// Item model (for shipment)
interface Item {
  name: string;
  quantity: number;
  weight: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  value?: number;
}

// Shipment model
interface Shipment {
  id: string;
  userId: string;
  trackingNumber: string;
  origin: Address;
  destination: Address;
  items: Item[];
  status: 'pending' | 'processing' | 'in-transit' | 'delivered' | 'cancelled';
  estimatedDelivery?: string;
  actualDelivery?: string;
  price: number;
  paidWith: 'wallet' | 'card' | 'invoice';
  createdAt: string;
  lastUpdated: string;
  trackingHistory: Array<{
    status: string;
    location?: string;
    timestamp: string;
    description?: string;
  }>;
}

// Transaction model
interface Transaction {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  type: 'deposit' | 'withdrawal' | 'payment';
  status: 'pending' | 'completed' | 'failed';
  reference?: string;
  description?: string;
  createdAt: string;
}
```

## Error Handling

The API should return consistent error responses with the following structure:

```json
{
  "error": true,
  "message": "Descriptive error message",
  "code": "ERROR_CODE",
  "details": {} // Optional additional error details
}
```

Common HTTP status codes to handle:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 422: Validation Error
- 500: Server Error

## Authentication Strategy

The application uses JWT (JSON Web Token) for authentication. When a user logs in:

1. The backend generates a JWT token and returns it
2. The frontend stores this token in localStorage
3. All subsequent API requests include this token in the Authorization header
4. The backend validates this token for each protected endpoint
5. If the token expires, the user is redirected to login

## Environment Configuration

Create a `.env` file in the root of your project with the following variables:

```
VITE_API_URL=https://your-api-url.com/api
VITE_STORAGE_URL=https://your-storage-url.com
```

## Implementation Tips

1. **API Client**: Create a centralized API client using Axios or fetch to handle all requests with consistent error handling and token management.

2. **Data Fetching**: Use React Query for efficient data fetching, caching, and state management.

3. **Form Handling**: Use React Hook Form for form validation and submission.

4. **Loading States**: Display appropriate loading indicators during API calls.

5. **Error Handling**: Implement global error handling for API errors with appropriate user feedback.

6. **Websockets**: For real-time tracking updates, implement a WebSocket connection to receive live status changes.

## Example Implementation

Here's an example of implementing the shipment listing page:

```jsx
// src/pages/AwaitingShipments.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '../components/Layout';
import LoadingSpinner from '../components/LoadingSpinner';
import { getAwaitingShipments } from '../api/shipmentApi';

const AwaitingShipments = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['awaitingShipments'],
    queryFn: getAwaitingShipments
  });

  if (isLoading) {
    return (
      <Layout title="Awaiting Shipments">
        <div className="h-64 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Awaiting Shipments">
        <div className="p-6 bg-red-50 text-red-500 rounded">
          Failed to load shipments. Please try again.
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Awaiting Shipments">
      <div className="p-4 md:p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Awaiting Shipments</h2>
          <p className="text-gray-600">Track and manage your shipments that are waiting to be processed.</p>
        </div>
        
        <div className="bg-white p-6 rounded-md border shadow-sm">
          {data?.shipments.length === 0 ? (
            <p className="text-center py-8 text-gray-600">No awaiting shipments found.</p>
          ) : (
            <div className="space-y-4">
              {data?.shipments.map((shipment) => (
                <ShipmentCard key={shipment.id} shipment={shipment} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

// You would implement ShipmentCard component separately
```

## Security Considerations

1. **HTTPS**: Ensure all API communication occurs over HTTPS
2. **Token Validation**: Implement proper token validation and expiration
3. **XSS Protection**: Sanitize all user inputs and API responses
4. **CORS**: Configure proper CORS headers on your API server
5. **Rate Limiting**: Implement rate limiting to prevent abuse
6. **Data Validation**: Validate all data on both client and server side

---

This documentation provides the foundation for integrating your backend APIs with the frontend application. Adapt as needed based on your specific backend implementation and business requirements.

For any questions or help with implementation, please contact your development team.
