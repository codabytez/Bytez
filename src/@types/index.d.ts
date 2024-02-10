interface StrapAnimationProps {
  path: string;
  top: string;
  left: string;
  transform: string;
}

interface EclipseAnimationProps {
  path?: string;
  transform: string;
}

interface SmallCircleProps {
  props: ChakraUiHStackProps;
}

interface ThemeProps {
  isDarkModeSwitch: boolean;
  toggleTheme: () => void;
}

interface MobileImg {
  fields: {
    file: {
      url: string;
      details: {
        image: {
          height: string;
          width: string;
        };
      };
    };
    title: string;
  };
}

interface MobileViewProps {
  mobileImg: MobileImg;
}

interface DesktopViewProps {
  desktopImg: MobileImg;
  projectStacks: string[];
}

interface ProjectFields {
  projectDescription: unknown;
  projectTitle: string;
  projectStacks: string[];
  projectUrl: string;
  mobileImg: MobileImg;
  desktopImg: MobileImg;
}

interface Project {
  fields: ProjectFields;
}

interface ProjectProps {
  project: Project;
}
