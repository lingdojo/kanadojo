// Empty fonts array for development
// This file is used in development to completely bypass font loading

type FontConfig = {
  name: string;
  font: {
    className: string;
  };
};

const fonts: FontConfig[] = [];

export default fonts;
