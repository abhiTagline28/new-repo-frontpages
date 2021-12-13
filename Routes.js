/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
  NoHeader,
  NoHeader as NoHeaderLayout,
} from './layouts';

import {
  Home as HomeView,
  ContactPage as ContactPageView,
  NewHome as NewHomeView,
  About as AboutView,
  AccessDashboard,
  AdminDashboard,
  AllTransactions,
  AllTransactionsPending,
  ApprovalChain,
  CheckRequest,
  CompanyTerms as CompanyTermsView,
  ConduiitLanding,
  ContactPageCover as ContactPageCoverView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  CostReportDashboard,
  CostReportSummary,
  CreateCompany,
  CreateCostReport,
  CreateProject,
  HelpCenter as HelpCenterView,
  HelpCenterArticle as HelpCenterArticleView,
  ManagerDashboard,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
  PasswordResetCover as PasswordResetCoverView,
  PasswordResetSimple as PasswordResetSimpleView,
  ProjectDashboard,
  PurchaseOrder,
  SigninCover as SigninCoverView,
  SigninSimple as SigninSimpleView,
  SignupCover as SignupCoverView,
  SignupSimple as SignupSimpleView,
  Solutions,
  TransactionsPendingApproval,
  UpdateCheckRequest,
  UpdateCreditCard,
  UpdatePurchaseOrder,
  UpdateUser,
  UpdateWireTransfer,
  UserDashboard,
  Users,
  WireTransfer,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/NewHome" />
      //{' '}
      
      <RouteWithLayout
        component={ConduiitLanding}
        exact
        layout={MinimalLayout}
        path="/ConduiitLanding"
      />
      
      <RouteWithLayout
        //   component={HomeView}
        //   exact
        //   layout={MinimalLayout}
        //   path="/home"
        // />
        //<RouteWithLayout
        component={ContactPageView}
        exact
        layout={MainLayout}
        path="/contact-page"
      />
      <RouteWithLayout
        component={NewHomeView}
        exact
        layout={MinimalLayout}
        path="/NewHome"
      />
      <RouteWithLayout
        component={AboutView}
        exact
        layout={MainLayout}
        path="/about"
      />
      <RouteWithLayout
        component={HelpCenterView}
        exact
        layout={MainLayout}
        path="/help-center"
      />
      <RouteWithLayout
        component={Solutions}
        exact
        layout={MinimalLayout}
        path="/Solutions"
      />
      <RouteWithLayout
        component={HelpCenterArticleView}
        exact
        layout={MainLayout}
        path="/help-center-article"
      />
      <RouteWithLayout
        component={CompanyTermsView}
        exact
        layout={MainLayout}
        path="/company-terms"
      />
      <RouteWithLayout
        component={ContactPageSidebarMapView}
        exact
        layout={MainLayout}
        path="/contact-sidebar-map"
      />
      <RouteWithLayout
        component={ContactPageCoverView}
        exact
        layout={MainLayout}
        path="/contact-page-cover"
      />
      <RouteWithLayout
        component={PasswordResetCoverView}
        exact
        layout={MinimalLayout}
        path="/password-reset-cover"
      />
      <RouteWithLayout
        component={PasswordResetSimpleView}
        exact
        layout={MinimalLayout}
        path="/password-reset-simple"
      />
      <RouteWithLayout
        component={CreateCostReport}
        exact
        layout={MinimalLayout}
        path="/costreport"
      />
      <RouteWithLayout
        component={CostReportDashboard}
        exact
        layout={NoHeaderLayout}
        path="/costreportdashboard/:id"
      />
      <RouteWithLayout
        component={SigninSimpleView}
        exact
        layout={MinimalLayout}
        path="/signin-simple"
      />
      <RouteWithLayout
        component={CreateCompany}
        exact
        layout={MinimalLayout}
        path="/createcompany"
      />
      <RouteWithLayout
        component={CreateProject}
        exact
        layout={MinimalLayout}
        path="/createproject"
      />

      <RouteWithLayout
        component={CostReportSummary}
        exact
        layout={MinimalLayout}
        path="/costreportsummary/:id"
      />
      {/**change to costreportid to be more specific**/}
      <RouteWithLayout
        component={SigninCoverView}
        exact
        layout={MinimalLayout}
        path="/signin-cover"
      />
      <RouteWithLayout
        component={SignupSimpleView}
        exact
        layout={MinimalLayout}
        path="/signup-simple"
      />
      <RouteWithLayout
        component={SignupCoverView}
        exact
        layout={MinimalLayout}
        path="/signup-cover"
      />
      <RouteWithLayout
        component={UpdateUser}
        exact
        layout={MinimalLayout}
        path="/update-password"
      />
      <RouteWithLayout
        component={PurchaseOrder}
        exact
        layout={MinimalLayout}
        path="/createrequests"
      />
      <RouteWithLayout
        component={Users}
        exact
        layout={MinimalLayout}
        path="/users"
      />
      <RouteWithLayout
        component={UpdatePurchaseOrder}
        exact
        layout={MinimalLayout}
        path="/updatepurchaseorder/:id"
      />
      <RouteWithLayout
        component={UpdateCreditCard}
        exact
        layout={MinimalLayout}
        path="/updatecreditcard/:id"
      />
      <RouteWithLayout
        component={UpdateWireTransfer}
        exact
        layout={MinimalLayout}
        path="/updatewiretransfer/:id"
      />
      <RouteWithLayout
        component={UpdateCheckRequest}
        exact
        layout={MinimalLayout}
        path="/updatecheckrequest/:id"
      />
      <RouteWithLayout
        component={AllTransactions}
        exact
        layout={MinimalLayout}
        path="/AllTransactions"
      />
      <RouteWithLayout
        component={NewHomeView}
        exact
        layout={MinimalLayout}
        path="/NewHome"
      />
      <RouteWithLayout
        component={CheckRequest}
        exact
        layout={MinimalLayout}
        path="/checkrequest"
      />
      <RouteWithLayout
        component={WireTransfer}
        exact
        layout={MinimalLayout}
        path="/wiretransfer"
      />
      <RouteWithLayout
        component={AccessDashboard}
        exact
        layout={NoHeaderLayout}
        path="/accessdashboard"
      />
      <RouteWithLayout
        component={ApprovalChain}
        exact
        layout={NoHeaderLayout}
        path="/approvalchain"
      />
      <RouteWithLayout
        component={ManagerDashboard}
        exact
        layout={NoHeaderLayout}
        path="/managerdashboard"
      />
      <RouteWithLayout
        component={ProjectDashboard}
        exact
        layout={NoHeaderLayout}
        path="/projectdashboard"
      />
      <RouteWithLayout
        component={UserDashboard}
        exact
        layout={MinimalLayout}
        path="/userdashboard"
      />
      <RouteWithLayout
        component={AdminDashboard}
        exact
        layout={NoHeaderLayout}
        path="/admindashboard"
      />
      
      <RouteWithLayout
        component={AllTransactionsPending}
        exact
        layout={MinimalLayout}
        path="/allpending"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={NotFoundCoverView}
        exact
        layout={MinimalLayout}
        path="/not-found-cover"
      />
      <Redirect to="/not-found-cover" status="404" />
    </Switch>
  );
};

export default Routes;
