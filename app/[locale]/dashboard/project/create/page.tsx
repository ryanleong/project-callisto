import React from 'react';

import ActionCreateForm from './actions';
import TypographyH1 from '@/components/ui/typography/TypographyH1';
import ProjectCreateForm from '@/components/ProjectCreateForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TypographyH2 from '@/components/ui/typography/TypographyH2';

const PageCreateProject = () => {
  return (
    <div id="PageCreateProject">
      <div className="container mx-auto px-2">
        <TypographyH1 className="mb-8">Create Project</TypographyH1>

        <Card>
          <CardHeader>
            <TypographyH2>Project Details</TypographyH2>
          </CardHeader>
          <CardContent>
            <ProjectCreateForm formSubmit={ActionCreateForm} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PageCreateProject;
