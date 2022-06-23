import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";

const Div = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;

  .title {
    font-size: 64px;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 640px) {
      font-size: 56px;
    }
  }

  .text {
    margin-top: 30px;
  }

  a {
    display: block;
    margin-top: 40px;
    padding: 14px 42px;
    text-decoration: none;
    font-weight: 500;
    border: none;
    border-radius: 10px;
    background: #8e2de2;
    background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Giải pháp mua sắm quần áo cho nam giới </title>
      </Head>
      <Div>
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Ae_Shirt_1.jpg?alt=media"
          }
          width={500}
          height={500}
          layout="responsive"
        />
        <p className="title">Công nghệ Việt cho người Việt</p>
        {/* <p className="title">Ra mắt Combo tiết kiệm ưu đãi tới 40%</p> */}
        <p className="text">
          Dòng sản phẩm công nghệ EXCOOL, Ra mắt Combo tiết kiệm ưu đãi tới 40%
        </p>
        <Link href="/collections">Trãi nghiệm </Link>
        <a href="https://widget-seven-bice.vercel.app/payment?contract=0xae18f6c514a500a30eaff19f1d1b7b320986eb72&amount=123&recipient=0x4a80Ab719e0b6F6e1AB8D72dA57834E5B18B5fd5">
          <input type="button" value="Dapp" />
        </a>
      </Div>
    </>
  );
};

export default Home;
