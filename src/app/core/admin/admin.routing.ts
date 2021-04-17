import { Routes } from "@angular/router";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManagementComponent } from "./management/management.component";
import { ReportComponent } from "./report/report.component";
import { SettingsComponent } from "./settings/settings.component";
import { ProfileComponent } from "./profile/profile.component";
import { MediaMonitoringComponent } from "./media-monitoring/media-monitoring.component";
import { SocialAnalysisComponent } from "./social-analysis/social-analysis.component";
import { CrisisDetectionComponent } from "./crisis-detection/crisis-detection.component";
import { ReputationComponent } from "./reputation/reputation.component";
import { ContentAndConversionStrategyComponent } from "./content-and-conversion-strategy/content-and-conversion-strategy.component";
import { ContentDeployementAndIntractionComponent } from "./content-deployement-and-intraction/content-deployement-and-intraction.component";

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "analytics",
        component: AnalyticsComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "management",
        component: ManagementComponent,
      },
      {
        path: "report",
        component: ReportComponent,
      },
      {
        path: "settings",
        component: SettingsComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "media-monitoring",
        component: MediaMonitoringComponent,
      },
      {
        path: "social-analysis",
        component: SocialAnalysisComponent,
      },
      {
        path: "crisis-detection",
        component: CrisisDetectionComponent,
      },
      {
        path: "reputation",
        component: ReputationComponent,
      },
      {
        path: "content-and-conversion-strategy",
        component: ContentAndConversionStrategyComponent,
      },
      {
        path: "content-deployement-and-interaction",
        component: ContentDeployementAndIntractionComponent,
      },
    ],
  },
];
