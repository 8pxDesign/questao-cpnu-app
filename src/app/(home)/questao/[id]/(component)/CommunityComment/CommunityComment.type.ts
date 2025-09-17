export interface CommunityCommentProps {
    users: CommunityCommentUserProps[];
}

interface CommunityCommentUserProps {
    userName: string;
    userAvatarUrl?: string;
    commentDate?: string;
    commentText?: string;
}