const baseUrl = "https://api.telegram.org/bot7037906282:AAGcuaIMTrtKZuQ0t2JwRV6c5YUgGfjTmDw/"

export const sendMessage = async (message: string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=-4119040698&text=${message}`;

    const response = await fetch(url);

    console.log("response", response);
    

};