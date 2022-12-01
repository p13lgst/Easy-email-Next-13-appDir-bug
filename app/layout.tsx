import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return (
    <html>
      <head />
      <body>{props.children}</body>
    </html>
  );
}
