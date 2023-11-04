export type User = {
	id: string;
};


export const isUser = (obj: any): obj is User => {
	return obj?.username
}