import { Stack } from "expo-router";
import React from "react";

import { colors } from "@/styles/colors";

const IndexLayout = () => {
    const backgroundColor = colors.gray[950];

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor },
            }}
        />
    );
};

export default IndexLayout;
