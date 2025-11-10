"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;

// ...props ka generally matlb ye hota hai like ki rest jo chize hai bachi hui unko ek satj rakh lo okkh!..
// example jo hai ..props ka wo acatully hai kuch aisa like man le mere paas ek button hai okkh!

// <Button children, ...props> {children}</Button>
// iska matlb ye hai like ki jo ...props hai wo button k andar wala hai jaise <button className varint="" onclick()>clivk me<button>
// To isme jo hai wo like ...props wo className varaintand onClick hai okkh!..

// To jo generally ThemeProvider hai uske andar hamm attribute class enable etc likhte hai okkh!..
// To isi ko hi ...props kahenge okkh!...

// And jo wo hai like NextThemeProviders uske nadra bhi ham kuc add karr skate hai jinhe props bol sakte hai..
