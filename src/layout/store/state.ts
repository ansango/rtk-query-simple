
export type LayoutState = {
    navbar: {} | null;
    status: "idle" | "loading" | "failed";
}

export const initialState: LayoutState = {
    navbar: null,
    status: "idle",
}