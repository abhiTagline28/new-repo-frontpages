import { gql } from '@apollo/react-hooks';

const APPROVERNODES = gql`
  query approverNodes($projectId: ID!) {
    approverNodes(projectId: $projectId) {
      projectId {
        projectName
      }
      userId {
        firstName
        lastName
      }
      levelUpId {
        firstName
        lastName
      }
    }
  }
`;

const NEGATIVE_ETC = gql`
  query negativeEtc($id: ID!) {
    negativeEtc(id: $id)
  }
`;

const COST_VARIANCE = gql`
  query sumCostVariance($id: ID!) {
    sumCostVariance(id: $id)
  }
`;

const COST_REPORT_SUMMARY = gql`
  query costReport($id: ID!) {
    costReport(id: $id) {
      createdAt
      costReportDetail {
        costReportAccountNumber
        costReportAccountDescription
        costReportActualThisPeriod
        costReportCommits
        costReportPriorCost
        costReportTotalCostsToDate
        costReportEstimateToComplete
        costReportEstimatedFinalCost
        costReportBudget
        costReportVariance
      }
    }
  }
`;

const PURCHASE_ORDERS = gql`
  query purchaseOrder($id: ID!) {
    purchaseOrder(id: $id) {
      orderId
    }
  }
`;

const CREDIT_CARDS = gql`
  query creditCard($id: ID!) {
    creditCard(id: $id) {
      orderId
    }
  }
`;

const CHECK_REQUEST = gql`
  query checkRequest($id: ID!) {
    checkRequest(id: $id) {
      id
      form_name
      vendorName
      amount
      description
      equipment_rental
      departure_location
      approved
      passenger_name
      guest_name
      transaction_number
      hotel
      anticipated_check_in_date
      anticipated_checkout_date
      arrival_location
      pick_up_date
      return_date
      travel
      description
      submission_date
      comments
      file
      account_subtotals {
        account_code
        details
        subtotal
      }
    }
  }
`;

const WIRE_TRANSFER = gql`
  query wireTransfer($id: ID!) {
    wireTransfer(id: $id) {
      id
      form_name
      vendorName
      amount
      description
      equipment_rental
      departure_location
      approved
      passenger_name
      guest_name
      transaction_number
      hotel
      anticipated_check_in_date
      anticipated_checkout_date
      arrival_location
      pick_up_date
      return_date
      travel
      description
      submission_date
      comments
      file
      account_subtotals {
        account_code
        details
        subtotal
      }
    }
  }
`;

const CHARTOFACCOUNTS = gql`
  query chartofaccounts($id: ID!) {
    chartofaccounts(id: $id) {
      company {
        companyName
      }
      account_codes {
        account_number
        account_description
      }
    }
  }
`;
const ALL_REQUESTS = gql`
  query allRequestsByProject($projectId:ID!) {
    allRequests(projectId: $projectId) {
      CheckRequest {
        id
        transaction_number
        form_name
        vendorName
        amount
        description
        approved
        company {
          companyName
        }
        projectId {
          projectName
        }
      }
      WireTransfer {
        id
        transaction_number
        form_name
        vendorName
        amount
        description
        approved
        company {
          companyName
        }
        projectId {
          projectName
        }
      }
      PurchaseOrder {
        id
        orderId
        form_name
        vendorName
        commitment
        description
        approved
      }
    }

    CreditCard {
      id
      orderId
      form_name
      vendorName
      commitment
      description
      approved
      levelOneOperationsApproved
      levelTwoOperationsApproved
      levelThreeOperationsApproved
      levelOneFinanceApproved
      levelTwoFinanceApproved
      levelThreeFinanceApproved
    }
  }
`;

const ALL_PENDING = gql`
  query allRequestsPending($projectId:ID!) {
    allRequestsPending(projectId: $projectId) {
      CheckRequest {
        id
        transaction_number
        form_name
        vendorName
        amount
        description
        approved
        company {
          companyName
        }
        projectId {
          projectName
        }
      }
      WireTransfer {
        id
        transaction_number
        form_name
        vendorName
        amount
        description
        approved
        company {
          companyName
        }
        projectId {
          projectName
        }
      }
      PurchaseOrder {
        id
        orderId
        form_name
        vendorName
        commitment
        description
        approved
      }
    }

    CreditCard {
      id
      orderId
      form_name
      vendorName
      commitment
      description
      approved
      levelOneOperationsApproved
      levelTwoOperationsApproved
      levelThreeOperationsApproved
      levelOneFinanceApproved
      levelTwoFinanceApproved
      levelThreeFinanceApproved
    }
  }
`;

const ALL_PURCHASE_ORDERS = gql`
  query purchaseOrders {
    purchaseOrders {
      vendorName
      id
      orderId
      commitment
      description
      approved
      company {
        companyName
      }
    }
  }
`;

const ALL_UNREAD = gql`
  query allRequestsUnread ($projectId:ID!){
    allRequestsUnread(projectId: $projectId) {
      CheckRequest {
        id
        form_name
        vendorName
        description
        amount
        read
      }
      PurchaseOrder {
        id
        form_name
        vendorName
        description
        commitment
        read
        orderId
      }
      CreditCard {
        id
        form_name
        vendorName
        description
        commitment
        read
        orderId
      }
      WireTransfer {
        id
        form_name
        vendorName
        description
        amount
        read
      }
    }
  }
`;

const ALL_REQUESTSPENDING = gql`
  query allRequestsPending ($projectId:ID){
    allRequestsPending(projectId: $projectId) {
      CheckRequest {
        id
        form_name
        vendorName
        description
        amount
        read
      }
      PurchaseOrder {
        id
        form_name
        vendorName
        description
        commitment
        read
        orderId
      }
      CreditCard {
        id
        form_name
        vendorName
        description
        commitment
        read
        orderId
      }
      WireTransfer {
        id
        form_name
        vendorName
        description
        amount
        read
      }
    }
  }
`;

const PROJECTS = gql`
  query projects {
    projects {
      projectName
      budget
      efc
      network
      costToDate
      actualFinalCost
      currency
      episodeCount
      productionServicesCompany
      additional_notes
      network
      totalDays
      totalDevelopmentDays
      totalPreProductionDays
      totalProductionDays
      totalPostProductionDays
      overUnder
      costReport {
        id
        createdAt
        costReportDetail {
          costReportBudget
          costReportEstimatedFinalCost
          costReportVariance
          costReportTotalCostsToDate
        }
      }
      company {
        companyName
      }
      users {
        lastName
        firstName
      }
    }
  }
`;
const PROJECTSTATUS = gql`
query projectStatus($id:ID!){
  projectStatus(id:$id){
    projectId{
    projectName
  }
  budget
  actualFinalCost
   costToDate
  daysTotal
  efc
  }
}
`
const PROJECT = gql`
  query project($id: ID!) {
    project(id: $id) {
      id
      efc
      users {
        id
        lastName
        firstName
        email
        role
      }
      projectName
      budget
      actualFinalCost
      currency
      episodeCount
      productionServicesCompany
      additional_notes
      network
      totalDays
      totalDevelopmentDays
      totalPreProductionDays
      totalProductionDays
      totalPostProductionDays
      overUnder
      costReport {
        createdAt
        id
        costReportDetail {
        costReportBudget
        }
      }
      approvalMatrix {
        id
        lastName
        firstName
        email
        role
      }
    }
  }
`;


const USERS = gql`
  query users {
    users {
      id
      lastName
      firstName
      email
      role
    }
  }
`;

const OFFERS = gql`
  query offers {
    offers {
      id
      rate
      amount
    }
  }
`;

const SUM_OF_PURCHASEORDERS = gql`
  query sumPurchaseOrders {
    sumPurchaseOrders
  }
`;

const SUM_PENDING_PO_PROJECT = gql`
  query sumPendingProjectPurchaseOrders($project: ID!) {
    sumPendingProjectPurchaseOrders(project: $project)
  }
`;

const SUMPENDINGPURCHASEORDERS = gql`
  query sumPendingPurchaseOrders {
    sumPendingPurchaseOrders
  }
`;

const SUMWIRETRANSFERS = gql`
  query sumWireTransfers {
    sumWireTransfers
  }
`;

const SUMPENDINGWIRETRANSFERS = gql`
  query sumPendingWireTransfers {
    sumPendingWireTransfers
  }
`;
const PROJECTVARIANCE = gql`
  query projectVariance($id: ID!) {
    projectVariance(id: $id)
  }
`;

export {
  ALL_PENDING,
  ALL_PURCHASE_ORDERS,
  ALL_REQUESTS,
  ALL_REQUESTSPENDING,
  ALL_UNREAD,
  APPROVERNODES,
  CHARTOFACCOUNTS,
  CHECK_REQUEST,
  COST_REPORT_SUMMARY,
  COST_VARIANCE,
  CREDIT_CARDS,
  NEGATIVE_ETC,
  OFFERS,
  PROJECT,
  PROJECTSTATUS,
  PROJECTS,
  PROJECTVARIANCE,
  PURCHASE_ORDERS,
  SUM_OF_PURCHASEORDERS,
  SUM_PENDING_PO_PROJECT,
  SUMPENDINGPURCHASEORDERS,
  SUMPENDINGWIRETRANSFERS,
  SUMWIRETRANSFERS,
  USERS,
  WIRE_TRANSFER,
};
