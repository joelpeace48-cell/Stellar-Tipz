import React from "react";
import PageContainer from "../../components/layout/PageContainer";
import Card from "../../components/ui/Card";
import Skeleton from "../../components/ui/Skeleton";

const TipPageSkeleton: React.FC = () => {
  return (
    <PageContainer maxWidth="xl" className="space-y-8 py-10">
      
      {/* Top Section */}
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* Left Card */}
        <Card className="space-y-6" padding="lg">
          
          {/* Avatar + Name */}
          <div className="flex flex-col gap-5 border-b-2 border-dashed border-black pb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              
              {/* Avatar */}
              <Skeleton variant="rect" width="80px" height="80px" />

              {/* Name + Username */}
              <div className="space-y-2">
                <Skeleton width="120px" height="12px" />
                <Skeleton width="180px" height="20px" />
                <Skeleton width="100px" height="12px" />
              </div>
            </div>

            {/* Credit badge */}
            <Skeleton width="60px" height="30px" />
          </div>

          {/* Bio */}
          <Skeleton lines={3} />

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-3">
            <Skeleton height="80px" />
            <Skeleton height="80px" />
            <Skeleton height="80px" />
          </div>
        </Card>

        {/* Right Card (Tip Form) */}
        <Card className="space-y-5" padding="lg">
          
          {/* Header */}
          <div className="space-y-2">
            <Skeleton width="120px" height="12px" />
            <Skeleton width="160px" height="20px" />
          </div>

          {/* Input */}
          <Skeleton height="50px" />

          {/* Suggested buttons */}
          <div className="flex gap-2">
            <Skeleton width="60px" height="30px" />
            <Skeleton width="60px" height="30px" />
            <Skeleton width="60px" height="30px" />
          </div>

          {/* Textarea */}
          <Skeleton height="80px" />

          {/* Buttons */}
          <div className="flex gap-3">
            <Skeleton height="40px" />
            <Skeleton height="40px" />
          </div>
        </Card>
      </section>

      {/* Bottom Section */}
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        
        {/* Info */}
        <Card className="space-y-4">
          <Skeleton width="200px" height="20px" />
          <Skeleton lines={3} />
          <Skeleton width="150px" height="12px" />
        </Card>

        {/* Activity */}
        <Card className="space-y-4">
          <Skeleton width="200px" height="20px" />

          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} height="80px" />
            ))}
          </div>
        </Card>
      </section>
    </PageContainer>
  );
};

export default TipPageSkeleton;