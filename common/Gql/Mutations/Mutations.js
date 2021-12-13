import { gql } from '@apollo/react-hooks';

const CREATE_APPROVER = gql`
  mutation createApprover(
    $companyId: ID
    $projectId: ID
    $userId: ID
    $requiredApprovals: [String]
  ) {
    createApprover(
      companyId:$companyId
      projectId:$projectId
      requiredApprovals:$requiredApprovals
      userId:$userId
    ){
      projectName
      approvalMatrix {
      firstName
      lastName
    }
    
  }
  }
`;

const CREATE_APPROVAL_CHAIN = gql `
  mutation createApprovalChain(
    $projectId:ID,
    $approversChain:[NodeInput]
  ){
    createApprovalChain(
      projectId:$projectId
      approversChain:$approversChain
    ){
      projectName
      approvalChain {
        userId
        order
      }
    }
  }
`

const ADD_COMPANY = gql`
  mutation CreateCompany(
    $companyName: String!
    $companyAddress: String!
    $companyContact: String!
    $file: Upload
  ) {
    createCompany(
      companyName: $companyName
      companyAddress: $companyAddress
      companyContact: $companyContact
      file: $file
    ) {
      companyName
      companyAddress
      companyContact
      companyEmail
      file
    }
  }
`;

const ADD_COSTREPORT = gql`
  mutation CreateCostReport(
    $companyId: ID
    $projectId: ID
    $userId: ID
    $additional_notes: String
    $file: FileUpload
  ) {
    createCostReport(
      companyId: $companyId
      projectId: $projectId
      userId: $userId
      additional_notes: $additional_notes
      file: $file
    ) {
      id
      companyId {
        companyName
      }
      projectId {
        projectName
      }
      user {
        firstName
        lastName
      }
      additional_notes
      costReportDetail {
        costReportAccountNumber
      }
    }
  }
`;

const ADD_PROJECT = gql`
  mutation CreateProject($input: ProjectInput, $companyId: ID) {
    createProject(input: $input, companyId: $companyId) {
      projectName
      budget
      efc
      network
      additional_notes
      projectAdminEmail
      taxCredit
      file
      costToDate
      users {
        lastName
        firstName
      }
      company {
        companyName
      }
    }
  }
`;

const ADD_PURCHASEORDER = gql`
  mutation CreatePurchaseOrder($input: PurchaseOrderInput) {
    createPurchaseOrder(input: $input) {
      orderId
      form_name
      vendorName
      commitment
      equipment_rental
      departure_location
      passenger_name
      guest_name
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
      w9Upload
      contractUpload
      account_subtotals {
        account_code
        details
        subtotal
      }
    }
  }
`;

const ADD_WIRETRANSFER = gql`
  mutation CreateWireTransfer($input: WireTransferInput) {
    createWireTransfer(input: $input) {
      form_name
      vendorName
      description
      date_required
      amount
      equipment_rental
      purchase_order_number
      pick_up_date
      return_date
      anticipated_check_in_date
      anticipated_checkout_date
      submission_date
      bank_name
      bank_address
      bank_account_number
      routing_number
      swift_code
      currency
      comments
      location_rental
      new_vendor
      w9Upload
      file
      document_number
      account_subtotals {
        account_code
        details
        subtotal
      }
    }
  }
`;

const ADD_CHECKREQUEST = gql`
  mutation CreateCheckRequest($input: CheckRequestInput) {
    createCheckRequest(input: $input) {
      form_name
      vendorName
      description
      date_required
      amount
      equipment_rental
      purchase_order_number
      pick_up_date
      return_date
      anticipated_check_in_date
      anticipated_checkout_date
      submission_date
      comments
      location_rental
      new_vendor
      w9Upload
      contractUpload
      file
      document_number
      account_subtotals {
        account_code
        details
        subtotal
      }
    }
  }
`;

const ADD_CREDITCARD = gql`
  mutation CreateCreditCard($input: CreditCardInput) {
    createCreditCard(input: $input) {
      orderId
      form_name
      vendorName
      commitment
      equipment_rental
      departure_location
      passenger_name
      guest_name
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
      w9Upload
      contractUpload
      account_subtotals {
        account_code
        details
        subtotal
      }
    }
  }
`;

const DELETE_PURCHASEORDERS = gql`
  mutation deletePurchaseOrder($id: ID) {
    deletePurchaseOrder(id: $id)
  }
`;

const DELETE_CREDITCARD = gql`
  mutation deleteCreditCard($id: ID) {
    deleteCreditCard(id: $id)
  }
`;

const DELETE_CHECKREQUEST = gql`
  mutation deleteCheckRequest($id: ID) {
    deleteCheckRequest(id: $id)
  }
`;

const DELETE_WIRETRANSFER = gql`
  mutation deleteWireTransfer($id: ID) {
    deleteWireTransfer(id: $id)
  }
`;

const READ_ALLWIRETRANSFERS = gql`
  mutation readAllWireTransfers($ids: [ID]) {
    readAllWireTransfers(ids: $ids)
  }
`;

const READ_ALLCHECKREQUESTS = gql`
  mutation readAllCheckRequests($ids: [ID]) {
    readAllCheckRequests(ids: $ids)
  }
`;

const READ_ALLPURCHASEORDERS = gql`
  mutation readAllPurchaseOrders($ids: [ID]) {
    readAllPurchaseOrders(ids: $ids)
  }
`;

const READ_ALLCREDITCARDS = gql`
  mutation readAllCreditCards($ids: [ID]) {
    readAllCreditCards(ids: $ids)
  }
`;

const APPROVE_PURCHASEORDER = gql`
  mutation approveAllPurchaseOrders($id: ID) {
    approveAllPurchaseOrders(id: $id) {
      id
    }
  }
`;
const APPROVE_CREDITCARD = gql`
  mutation approveCreditCard($id: ID) {
    approveCreditCard(id: $id) {
      id
    }
  }
`;

const APPROVE_CHECKREQUEST = gql`
  mutation approveCheckRequest($id: ID) {
    approveCheckRequest(id: $id) {
      id
    }
  }
`;

const APPROVE_WIRETRANSFER = gql`
  mutation approveWireTransfer($id: ID) {
    approveWireTransfer(id: $id) {
      id
    }
  }
`;

const UPDATE_CHECKREQUEST = gql`
  mutation updateCheckRequest($id: ID, $input: CheckRequestInput) {
    updateCheckRequest(id: $id, input: $input) {
      form_name
      vendorName
      amount
      description
      equipment_rental
      departure_location
      approved
      passenger_name
      guest_name
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
const UPDATE_WIRETRANSFER = gql`
  mutation updateWireTransfer($id: ID, $input: WireTransferInput) {
    updateWireTransfer(id: $id, input: $input) {
      form_name
      vendorName
      amount
      description
      equipment_rental
      departure_location
      approved
      passenger_name
      guest_name
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

const UPDATE_CREDITCARD = gql`
  mutation updateCreditCard($id: ID, $input: CreditCardInput) {
    updateCreditCard(id: $id, input: $input) {
      form_name
      vendorName
      commitment
      description
      equipment_rental
      departure_location
      approved
      passenger_name
      guest_name
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

const UPDATE_PURCHASEORDER = gql`
  mutation updatePurchaseOrder($id: ID, $input: PurchaseOrderInput) {
    updatePurchaseOrder(id: $id, input: $input) {
      form_name
      vendorName
      commitment
      description
      equipment_rental
      departure_location
      approved
      passenger_name
      guest_name
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
const UPDATEPASSWORD = gql`
  mutation updateUserPassword(
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    updateUserPassword(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      firstName
      email
    }
  }
`;

const SIGNIN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const CREATEUSER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
    $role: Access
    $level: Int
    $projectId: ID
    $companyId: ID
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      role: $role
      level: $level
      projectId: $projectId
      companyId: $companyId
    ) {
      lastName
      firstName
      role
      email
      role
      level
      company {
        companyName
      }
    }
  }
`;

const PASSWORD_RESET = gql`
  mutation passwordReset($email: String!) {
    passwordReset(email: $email)
  }
`;

export {
  ADD_COMPANY,
  ADD_CHECKREQUEST,
  ADD_WIRETRANSFER,
  ADD_PURCHASEORDER,
  DELETE_CHECKREQUEST,
  DELETE_PURCHASEORDERS,
  READ_ALLCHECKREQUESTS,
  READ_ALLWIRETRANSFERS,
  READ_ALLPURCHASEORDERS,
  APPROVE_CHECKREQUEST,
  APPROVE_WIRETRANSFER,
  APPROVE_PURCHASEORDER,
  UPDATE_PURCHASEORDER,
  UPDATEPASSWORD,
  CREATEUSER,
  SIGNIN,
  PASSWORD_RESET,
  UPDATE_CHECKREQUEST,
  READ_ALLCREDITCARDS,
  APPROVE_CREDITCARD,
  ADD_CREDITCARD,
  UPDATE_CREDITCARD,
  DELETE_CREDITCARD,
  UPDATE_WIRETRANSFER,
  DELETE_WIRETRANSFER,
  ADD_PROJECT,
  ADD_COSTREPORT,
  CREATE_APPROVER,
  CREATE_APPROVAL_CHAIN
};
