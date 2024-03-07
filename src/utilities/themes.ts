export interface ThemeInterface {
  backgroundColor: string;
  secondaryBackgroundColor: string;
  textColor: string;
  secondaryTextColor: string;
}

export const lightTheme: ThemeInterface = {
  backgroundColor: '#FEF9F3',
  secondaryBackgroundColor: '#E3D6CB',
  textColor: '#414042',
  secondaryTextColor: '#4C4036',
};

export const darkTheme: ThemeInterface = {
  backgroundColor: '#414042',
  secondaryBackgroundColor: '#4C4036',
  textColor: '#FEF9F3',
  secondaryTextColor: '#E3D6CB',
};
