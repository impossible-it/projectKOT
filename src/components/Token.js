import React from 'react';
import '../components/order__style.css';
import tokenPhoto from '../components/img/flk.svg'
const Token = (props) => {
    const tokenAddress = "0x4CD5B6bcfad452fa9BfbEF3AD4B12F8A39aB1397";
    const tokenSymbol = "USDT";
    const tokenDecimals = 18;
    const tokenImage = "https://pngicon.ru/file/uploads/fox.png";

    function addToken() {
        try {
            // Проверяем, есть ли у пользователя Trust Wallet
            const isTrustWalletInstalled = !!window.ethereum && window.ethereum.isTrust;

            if (isTrustWalletInstalled) {
                // Запрос разрешения на учетную запись пользователя
                const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Authorized accounts:', accounts);

                const wasAdded = window.ethereum.request({
                    method: "wallet_watchAsset",
                    params: {
                        type: "ERC20",
                        options: {
                            address: tokenAddress,
                            symbol: tokenSymbol,
                            decimals: tokenDecimals,
                            image: tokenImage,
                        },
                    },
                });
                console.log(wasAdded);
                if (wasAdded) {
                    console.log("Thanks for your interest!");
                } else {
                    console.log("Your loss!");
                }
            } else {
                console.log("Trust Wallet not found. Please make sure it is installed.");
            }
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='token_button'>
      <p>ded denis</p>
      <button onClick={addToken}>Add token</button>
      <p> &suck penis</p>
    </div>
  );
};
export default Token;