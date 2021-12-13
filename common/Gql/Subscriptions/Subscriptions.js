import { gql } from '@apollo/react-hooks';

const PURCHASEORDER_SUBSCRIPTION = gql`
subscription newPurchaseOrderCreated {
  newPurchaseOrder{
    orderId
    vendorName
  }
}
`

export {
    PURCHASEORDER_SUBSCRIPTION
}