export const getUserStorage = (): {agent: string; desktop: string} => {

    return {
        agent: localStorage.getItem('agent') ?? '',
        desktop: localStorage.getItem('desktop') ?? '',
    };

}