import { atom } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})
export const jobsAtom = atom({
    key: "jobAtom",
    default: 50
})
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 52
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 5
})