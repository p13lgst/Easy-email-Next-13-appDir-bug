import React from "react";
import { BlockManager, BasicType, AdvancedType } from "easy-email-core";
import { EmailEditor, EmailEditorProvider } from "easy-email-editor";
import { ExtensionProps, StandardLayout } from "easy-email-extensions";

import "easy-email-editor/lib/style.css";
import "easy-email-extensions/lib/style.css";

// theme, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/1799/setting/base/Color
import "@arco-themes/react-easy-email-theme-purple/css/arco.css";

const initialValues = {
  subject: "Welcome to Easy-email",
  subTitle: "Nice to meet you!",
  content: BlockManager.getBlockByType(BasicType.PAGE)!.create({}),
};

export default function Editor() {
  return (
    <EmailEditorProvider
      data={initialValues}
      height={"calc(100vh - 72px)"}
      autoComplete
      dashed={false}
    >
      {({ values }) => {
        return (
          <StandardLayout compact showSourceCode={false}>
            <EmailEditor />
          </StandardLayout>
        );
      }}
    </EmailEditorProvider>
  );
}
