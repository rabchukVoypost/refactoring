import { Maybe, Message, User } from '../graphql/generated';

export type EventDetailsProps = {
    event?: Event;
    open: boolean;
    setOpen: (open: boolean) => void;
    onDialogClose?: () => void;
    refetchEvents?: () => void;
    message?: Maybe<Message>;
    onEventCreation?: (eventId: string, event: Event) => void;
    onCreateEventFromMessageItem?: (eventId: string, event: Event) => void;
    currentUser: User;
    onEventDelition?: () => void;
    messageId?: string;
    messageTitle?: string | null | undefined;
    isMessageDone?: boolean | null | undefined;
    isMessageDeleted?: boolean | null | undefined;
};
export interface EventForm {
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    notifications: NotificationItem[];
}

export type NotificationItem = {
    userId: string;
    period: string;
    periodType: PeriodType;
};

export type PeriodType = "Minute" | "Hour" | "Day" | "Week";

export const periodTypes = ["Minute", "Hour", "Day", "Week"];
export const periodRate = {
    Minute: 1000 * 60,
    Hour: 1000 * 60 * 60,
    Day: 1000 * 60 * 60 * 24,
    Week: 1000 * 60 * 60 * 24 * 7,
};