import { createComponent } from "@lit-labs/react";
import React from "react";
import { LitButton } from "./Button";

export const LitReactButton = createComponent(
    React,
    "lit-button",
    LitButton,
    {
        onButtonIncremented: "button-incremented"
    }
);
