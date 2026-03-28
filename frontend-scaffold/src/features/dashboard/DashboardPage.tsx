import React from "react";
import { LayoutDashboard, Settings, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

import PageContainer from "../../components/layout/PageContainer";
import WalletConnect from "../../components/shared/WalletConnect";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import EmptyState from "../../components/ui/EmptyState";
import Tabs from "../../components/ui/Tabs";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useDashboard } from "../../hooks/useDashboard";
import { useWalletStore } from "../../store/walletStore";
import { mockProfile } from "../mockData";
import EarningsTab from "./EarningsTab";
import OverviewTab from "./OverviewTab";
import TipsTab from "./TipsTab";

const DashboardPage: React.FC = () => {
  usePageTitle("Dashboard");

  const { connected } = useWalletStore();
  const { profile, stats, loading } = useDashboard();

  if (!connected) {
    return (
      <PageContainer maxWidth="xl" className="space-y-8 py-10">
        <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-500">
              Creator dashboard
            </p>
            <h1 className="mt-2 flex items-center gap-3 text-4xl font-black uppercase">
              <LayoutDashboard size={32} />
              Dashboard
            </h1>
          </div>
          <WalletConnect />
        </section>
        <EmptyState
          icon={<Wallet />}
          title="Connect your wallet"
          description="Connect a Stellar wallet to view your creator dashboard."
        />
      </PageContainer>
    );
  }

  if (!loading && !profile) {
    return (
      <PageContainer maxWidth="xl" className="space-y-8 py-10">
        <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-500">
              Creator dashboard
            </p>
            <h1 className="mt-2 flex items-center gap-3 text-4xl font-black uppercase">
              <LayoutDashboard size={32} />
              Dashboard
            </h1>
          </div>
          <WalletConnect />
        </section>
        <EmptyState
          icon={<LayoutDashboard />}
          title="No creator profile yet"
          description="Register a profile first to unlock your dashboard and withdrawal flow."
        />
        <div className="flex justify-center">
          <Link to="/register">
            <Button>Register now</Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  const creator = profile ?? mockProfile;

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: <OverviewTab />,
    },
    {
      id: "tips",
      label: "Tips",
      content: <TipsTab />,
    },
    {
      id: "earnings",
      label: "Earnings",
      content: <EarningsTab profile={creator} stats={stats} loading={loading} />,
    },
    {
      id: "settings",
      label: "Settings",
      content: (
        <div className="pt-6">
          <Card className="space-y-4" padding="lg">
            <div className="flex items-center gap-3">
              <Settings size={22} />
              <h2 className="text-2xl font-black uppercase">
                Settings scaffold
              </h2>
            </div>
            <p className="text-sm font-medium leading-6 text-gray-700">
              Profile editing already lives in a dedicated flow. Additional
              payout and notification settings will land here as the dashboard
              evolves.
            </p>
            <Link to="/profile/edit">
              <Button variant="outline">Edit profile</Button>
            </Link>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <PageContainer maxWidth="xl" className="space-y-8 py-10">
      <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-gray-500">
            Creator dashboard
          </p>
          <h1 className="mt-2 flex items-center gap-3 text-4xl font-black uppercase">
            <LayoutDashboard size={32} />
            Dashboard
          </h1>
          <p className="mt-2 text-sm font-bold text-gray-600">
            @{creator.username}
          </p>
        </div>
        <WalletConnect />
      </section>

      <Tabs tabs={tabs} defaultTab="overview" />
    </PageContainer>
  );
};

export default DashboardPage;
