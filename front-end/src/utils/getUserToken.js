const getUserToken = () => {
    const token = JSON.parse(localStorage.getItem('user')).state?.user?.token;

    if (!token) {
        throw new Error('token')
    }
    return token;
};

export default getUserToken;