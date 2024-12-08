import fetchApi from "@apis/ky";
import { logoutPost } from "@apis/logoutService";

export const unregisterDelete = async () => {
    await fetchApi.delete('members/me')
    logoutPost()
}