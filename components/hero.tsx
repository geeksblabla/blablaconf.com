import Image from "next/image";
import { TechSouk } from "./tech-souk";
import { SoukDoor } from "./souk-door";

export const Hero = () => {
  return (
    <div className="relative bg-opacity-90 py-16 md:pt-16 md:pb-36 pt-8 overflow-hidden">
      <div className="absolute left-[50%] z-[-1] top-40 md:top-0">
        <SoukDoor />
      </div>
      <div className="relative mx-auto max-w-screen-lg md:max-w-screen-xl  flex flex-col justify-center items-center  md:px-8 px-4 ">
        {/* <DateConf className="bg-gray-200" /> */}
        <div className="mx-auto flex  flex-col justify-center items-center mt-2 font-sans w-full max-w-[800px] ">
          <div data-sal="fade" data-sal-delay="0" data-sal-duration="500">
            <TechSouk />
          </div>

          <p
            className="lg:text-7xl md:text-5xl text-4xl font-bold leading-normal md:leading-normal text-center text-[#78543E]"
            data-sal="fade"
            data-sal-delay="200"
            data-sal-duration="500"
          >
            بلابلا كونف تعود
            <br /> من جديد
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute bg-[url('/images/pattern.svg')] bg-contain bg-repeat top-0 bottom-0 w-full bg-white/50 -z-10" />
        <div
          className="z-10 mx-auto max-w-screen-lg flex flex-col-reverse md:flex-row mt-6 items-center py-8 justify-between"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="500"
        >
          <svg
            width="218"
            height="60"
            viewBox="0 0 218 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M156.193 43.3121C157.192 44.2187 158.076 44.7565 158.844 44.9255V47C157.753 46.9693 156.67 46.6082 155.594 45.9167C155.072 46.0089 154.626 46.3777 154.257 47.023C153.919 47.6223 153.904 49.036 154.211 51.2642C153.996 52.2322 153.658 52.6164 153.197 52.4166C152.736 52.2322 152.413 51.825 152.229 51.195L151.952 49.7198C151.737 48.8747 151.622 48.0603 151.607 47.2766C151.576 46.4929 152.091 45.448 153.151 44.1419C154.119 42.9125 155.133 42.636 156.193 43.3121ZM151.215 37.8954C152.459 37.1117 153.896 36.7199 155.525 36.7199C155.894 36.7199 156.224 36.743 156.516 36.7891C156.808 36.8198 157.062 36.8736 157.277 36.9504H157.254C157.93 37.1809 158.268 37.4268 158.268 37.688C158.268 38.0721 157.799 38.2873 156.862 38.3334C156.355 38.3641 155.825 38.3872 155.272 38.4025C154.718 38.4179 154.18 38.5101 153.658 38.6791C153.166 38.8174 152.582 39.1555 151.906 39.6933V39.6702C151.783 39.7163 151.683 39.7471 151.607 39.7624C151.514 39.7778 151.422 39.7855 151.33 39.7855C150.685 39.7855 150.362 39.5243 150.362 39.0018C150.362 38.633 150.646 38.2642 151.215 37.8954ZM168.456 47.023C166.919 46.9462 165.805 46.6158 165.114 46.0319C164.438 45.448 164.015 44.7796 163.846 44.0266C163.093 46.1472 161.426 47.1306 158.844 46.977V44.9486C159.49 44.9025 160.112 44.7258 160.711 44.4185C161.31 44.1111 161.887 43.2199 162.44 41.7447C162.747 40.5 162.962 39.4705 163.085 38.6561C163.224 37.8416 163.247 36.9427 163.154 35.9593C163.062 34.9605 163.339 34.0692 163.984 33.2855C165.275 31.6721 166.105 31.6413 166.474 33.1933C166.212 35.1141 165.951 37.2654 165.69 39.6472C165.644 41.5219 165.782 42.7666 166.105 43.3812C166.427 43.9959 166.766 44.3877 167.119 44.5567C167.488 44.7104 167.933 44.818 168.456 44.8794V47.023ZM181.917 1.91509C182.654 1.05458 183.039 1.17751 183.069 2.28389C182.624 3.31343 182.178 4.20468 181.732 4.95763C181.287 5.69522 180.764 6.58647 180.165 7.63138C179.581 8.67629 178.682 10.0362 177.468 11.7112C176.27 13.3861 174.172 16.152 171.176 20.009C168.179 23.8659 165.037 28.0994 161.748 32.7093C161.518 32.8015 161.41 32.7016 161.426 32.4096C161.057 31.1496 161.987 28.8831 164.215 25.61C166.458 22.337 168.779 19.2023 171.176 16.2058C173.588 13.2094 175.778 10.3435 177.745 7.60833C179.712 4.87312 181.102 2.97537 181.917 1.91509ZM176.615 47C175.371 46.9232 174.479 46.708 173.942 46.3546C173.404 46.0012 173.058 45.5863 172.904 45.1099C172.766 44.6182 172.612 44.5491 172.443 44.9025C172.274 45.2406 172.021 45.5556 171.683 45.8475C171.345 46.1241 170.976 46.3546 170.576 46.539C170.192 46.7234 169.439 46.8771 168.318 47V44.8794C168.994 44.9255 169.593 44.7565 170.115 44.3724C170.653 43.9728 170.999 43.5656 171.153 43.1507C171.306 42.7358 171.452 42.2979 171.591 41.8369C171.729 41.3759 171.89 40.9994 172.075 40.7075C172.274 40.4155 172.566 40.2542 172.951 40.2234C173.35 40.1773 173.627 40.3233 173.78 40.6614C173.949 40.9841 174.034 41.3759 174.034 41.8369C174.049 42.2979 174.111 42.7128 174.218 43.0816C174.326 43.435 174.449 43.727 174.587 43.9575C174.741 44.188 175.033 44.4031 175.463 44.6028C175.893 44.8026 176.277 44.8871 176.615 44.8564V47ZM166.197 52.2092C165.628 52.578 165.344 52.9545 165.344 53.3386C165.344 53.8611 165.682 54.1915 166.358 54.3298C166.435 54.3298 166.52 54.3221 166.612 54.3067C166.704 54.2913 166.804 54.2606 166.912 54.2145C167.588 53.6767 168.179 53.3386 168.686 53.2003C169.209 53.0313 169.747 52.9314 170.3 52.9007C170.853 52.8853 171.383 52.87 171.89 52.8546C172.828 52.6702 173.296 52.3782 173.296 51.9787C173.296 51.7021 172.951 51.4486 172.259 51.2181C172.059 51.1412 171.813 51.0798 171.521 51.0337C171.229 51.0029 170.899 50.9876 170.53 50.9876C168.901 50.9876 167.457 51.3948 166.197 52.2092ZM177.583 30.3582C178.936 29.4977 180.495 29.0675 182.263 29.0675C182.662 29.0675 183.015 29.0905 183.323 29.1366C183.63 29.1673 183.899 29.2288 184.13 29.321C184.867 29.5669 185.236 29.8358 185.236 30.1277C185.236 30.5426 184.721 30.7731 183.692 30.8192C183.154 30.8346 182.585 30.8576 181.986 30.8884C181.387 30.9037 180.803 31.0036 180.234 31.188C179.696 31.3417 179.059 31.7028 178.321 32.2713C178.213 32.3174 178.106 32.3482 177.998 32.3635C177.906 32.3789 177.814 32.3866 177.722 32.3866C177.015 32.3866 176.661 32.11 176.661 31.5568C176.661 31.1573 176.969 30.7578 177.583 30.3582ZM181.755 38.7252C182.478 39.1862 182.662 40.2234 182.309 41.8369C181.341 45.1407 179.404 46.8463 176.5 46.9539V44.9025C178.667 44.841 179.827 43.3274 179.981 40.3617C180.15 39.0556 180.741 38.5101 181.755 38.7252ZM200.771 40.0851C200.725 40.3925 200.687 40.9072 200.656 41.6295C200.625 42.3517 200.787 43.0432 201.14 43.7039C201.509 44.3493 202.316 44.7642 203.56 44.9486V47.023C201.732 47.023 200.502 46.6312 199.872 45.8475C199.242 45.0485 199.004 44.3493 199.158 43.75C198.543 45.0408 197.729 46.247 196.715 47.3688C195.808 48.5827 194.817 49.305 193.741 49.5354C191.621 50.0118 191.137 49.5047 192.289 48.0142C193.887 46.831 195.009 45.7323 195.654 44.7181C196.315 43.7039 197.16 42.1289 198.19 39.9929L198.374 39.7163C198.835 38.9941 199.319 38.6714 199.826 38.7483C200.333 38.8251 200.648 39.2707 200.771 40.0851ZM209.553 22.4061C209.538 22.2371 209.53 22.0834 209.53 21.9451C209.546 21.7915 209.584 21.6455 209.645 21.5072C209.722 21.3535 209.776 21.2076 209.807 21.0693C209.853 20.9156 209.853 20.7619 209.807 20.6083C209.761 20.4546 209.684 20.3317 209.576 20.2395C209.484 20.1319 209.338 20.032 209.138 19.9398C208.954 19.8323 208.739 19.7785 208.493 19.7785C208.262 19.7785 208.04 19.8169 207.824 19.8937C207.609 19.9706 207.417 20.0858 207.248 20.2395C207.095 20.3931 206.964 20.5852 206.856 20.8157C206.749 21.0462 206.672 21.2767 206.626 21.5072C206.595 21.7377 206.595 21.9605 206.626 22.1756C206.672 22.3754 206.764 22.5905 206.902 22.821C207.041 23.0362 207.194 23.2052 207.363 23.3281C207.533 23.4357 207.755 23.5432 208.032 23.6508C208.324 23.7584 208.593 23.8045 208.839 23.7891C209.1 23.7584 209.284 23.7046 209.392 23.6278C209.515 23.5509 209.607 23.4434 209.668 23.3051C209.745 23.1668 209.791 23.0669 209.807 23.0054C209.822 22.9286 209.791 22.8518 209.715 22.7749C209.638 22.6981 209.584 22.5752 209.553 22.4061ZM215.085 33.4238C216.499 33.4085 217.275 34.1384 217.413 35.6135C217.567 37.0887 216.737 38.7559 214.924 40.6153L212.941 42.4131L211.605 43.75C213.157 45.0715 212.304 45.5018 209.046 45.0408C207.387 46.0089 206.188 46.5928 205.45 46.7926C204.713 46.977 204.029 47.0384 203.399 46.977V44.9255L204.137 44.8564C205.612 44.5491 206.434 44.0189 206.603 43.266L205.243 41.2146C204.936 40.646 204.813 40.1927 204.874 39.8546C204.889 38.8866 206.564 37.3269 209.899 35.1756C212.112 33.8694 213.84 33.2855 215.085 33.4238ZM207.709 40.0621C207.709 41.0763 208.139 41.7601 209 42.1135H209.415C210.813 41.7601 212.542 40.4539 214.601 38.1951C215.062 37.6112 215.177 36.9197 214.947 36.1206L214.716 35.844L214.463 35.7979C213.11 35.967 211.574 36.6123 209.853 37.7341C208.424 38.779 207.709 39.555 207.709 40.0621Z"
              fill="#78543E"
            />
            <path
              d="M0 38.3481C1.56171 37.6778 2.66923 35.3565 3.91061 32.4007C9.09335 20.0603 18.9598 16.9961 28.5252 16.9961L108.471 17.0087C118.039 17.0087 127.907 20.0755 133.091 32.4185C134.332 35.3723 135.439 37.6918 137 38.3624C135.438 39.0327 134.331 41.354 133.089 44.3098C127.907 56.6501 118.04 59.7144 108.475 59.7144L28.5288 59.7018C18.9611 59.7018 9.09313 56.635 3.90878 44.2919C2.66814 41.3382 1.56095 39.0186 0 38.3481Z"
              fill="#7B5741"
            />
            <path
              d="M35.9883 42.16C35.135 42.16 34.431 42.0373 33.8763 41.792C33.3217 41.536 32.8843 41.168 32.5643 40.688C32.2443 40.1973 32.015 39.6 31.8763 38.896C31.7483 38.192 31.6843 37.392 31.6843 36.496C31.6843 35.568 31.7483 34.752 31.8763 34.048C32.015 33.3333 32.2443 32.736 32.5643 32.256C32.895 31.7653 33.3323 31.3973 33.8763 31.152C34.431 30.896 35.1243 30.768 35.9563 30.768C36.3723 30.768 36.8043 30.7893 37.2523 30.832C37.711 30.8747 38.143 30.9333 38.5483 31.008C38.9643 31.072 39.311 31.136 39.5883 31.2L39.5403 32.256C39.263 32.2027 38.9217 32.1547 38.5163 32.112C38.111 32.0587 37.695 32.016 37.2683 31.984C36.8523 31.9413 36.4683 31.92 36.1163 31.92C35.487 31.92 34.9697 32.0107 34.5643 32.192C34.159 32.3733 33.8443 32.656 33.6203 33.04C33.3963 33.4133 33.2363 33.888 33.1403 34.464C33.055 35.0293 33.0123 35.7067 33.0123 36.496C33.0123 37.52 33.0923 38.368 33.2523 39.04C33.4123 39.712 33.711 40.2133 34.1483 40.544C34.5963 40.864 35.2417 41.024 36.0843 41.024C36.3297 41.024 36.591 41.0133 36.8683 40.992C37.1457 40.9707 37.4123 40.944 37.6683 40.912C37.935 40.88 38.1537 40.848 38.3243 40.816V37.472H36.5323V36.336H39.5883V41.776C39.407 41.808 39.167 41.8453 38.8683 41.888C38.5697 41.9307 38.2497 41.9733 37.9083 42.016C37.567 42.0587 37.2257 42.0907 36.8843 42.112C36.5537 42.144 36.255 42.16 35.9883 42.16ZM44.6317 42.16C43.8317 42.16 43.197 42.0053 42.7277 41.696C42.269 41.3867 41.9384 40.928 41.7357 40.32C41.533 39.712 41.4317 38.9547 41.4317 38.048C41.4317 37.0347 41.5704 36.224 41.8477 35.616C42.125 34.9973 42.5144 34.5493 43.0157 34.272C43.517 33.984 44.109 33.84 44.7917 33.84C45.8584 33.84 46.6637 34.1387 47.2077 34.736C47.7517 35.3227 48.0237 36.272 48.0237 37.584L47.9597 38.528H42.6957C42.7064 39.36 42.861 39.9893 43.1597 40.416C43.4584 40.8427 43.997 41.056 44.7757 41.056C45.0744 41.056 45.3997 41.0507 45.7517 41.04C46.1144 41.0187 46.4717 40.9973 46.8237 40.976C47.1757 40.9547 47.4744 40.9333 47.7197 40.912L47.7517 41.888C47.4957 41.9307 47.181 41.9733 46.8077 42.016C46.445 42.0587 46.0717 42.0907 45.6877 42.112C45.3037 42.144 44.9517 42.16 44.6317 42.16ZM42.6957 37.52H46.7757C46.7757 36.5387 46.6157 35.856 46.2957 35.472C45.9864 35.0773 45.485 34.88 44.7917 34.88C44.1197 34.88 43.6024 35.0827 43.2397 35.488C42.877 35.8933 42.6957 36.5707 42.6957 37.52ZM52.5018 42.176C51.9472 42.176 51.5045 42.0907 51.1738 41.92C50.8538 41.7493 50.6245 41.456 50.4858 41.04C50.3472 40.6133 50.2778 40.016 50.2778 39.248V35.072H49.1418V34H50.2778V31.552H51.5098V34H54.0218V35.072H51.5098V38.88C51.5098 39.4453 51.5312 39.888 51.5738 40.208C51.6272 40.5173 51.7338 40.736 51.8938 40.864C52.0538 40.992 52.3045 41.056 52.6458 41.056C52.7525 41.056 52.8912 41.0507 53.0618 41.04C53.2325 41.0293 53.4032 41.0187 53.5738 41.008C53.7552 40.9867 53.9152 40.9707 54.0538 40.96L54.1338 42C53.8992 42.032 53.6218 42.0693 53.3018 42.112C52.9818 42.1547 52.7152 42.176 52.5018 42.176ZM60.7468 42.16C60.0108 42.16 59.4508 41.952 59.0668 41.536C58.6828 41.12 58.4908 40.512 58.4908 39.712C58.4908 39.1893 58.5815 38.7627 58.7628 38.432C58.9442 38.1013 59.2162 37.8507 59.5788 37.68C59.9522 37.4987 60.4108 37.3867 60.9548 37.344L63.4188 37.104V36.416C63.4188 35.872 63.2962 35.488 63.0508 35.264C62.8162 35.04 62.4642 34.928 61.9948 34.928C61.7282 34.928 61.4082 34.9387 61.0348 34.96C60.6722 34.9813 60.3095 35.008 59.9468 35.04C59.5842 35.072 59.2642 35.104 58.9868 35.136L58.9228 34.192C59.1788 34.1387 59.4882 34.0853 59.8508 34.032C60.2135 33.9787 60.5922 33.936 60.9868 33.904C61.3815 33.8613 61.7442 33.84 62.0748 33.84C62.6828 33.84 63.1788 33.936 63.5628 34.128C63.9468 34.3093 64.2242 34.592 64.3948 34.976C64.5762 35.3493 64.6668 35.8293 64.6668 36.416V40.464C64.6882 40.6987 64.7788 40.8693 64.9388 40.976C65.1095 41.0827 65.3228 41.152 65.5788 41.184L65.5308 42.16C65.2962 42.16 65.0828 42.144 64.8908 42.112C64.6988 42.0907 64.5175 42.0533 64.3468 42C64.2082 41.9467 64.0748 41.8827 63.9468 41.808C63.8295 41.7333 63.7122 41.6427 63.5948 41.536C63.3922 41.6213 63.1308 41.712 62.8108 41.808C62.5015 41.904 62.1655 41.984 61.8028 42.048C61.4508 42.1227 61.0988 42.16 60.7468 42.16ZM60.9548 41.12C61.2428 41.12 61.5415 41.0933 61.8508 41.04C62.1602 40.9867 62.4535 40.9227 62.7308 40.848C63.0082 40.7733 63.2375 40.704 63.4188 40.64V38.032L61.0988 38.256C60.6188 38.2987 60.2722 38.4373 60.0588 38.672C59.8562 38.9067 59.7548 39.2427 59.7548 39.68C59.7548 40.128 59.8562 40.48 60.0588 40.736C60.2615 40.992 60.5602 41.12 60.9548 41.12ZM73.1737 42.176C72.619 42.176 72.1764 42.0907 71.8457 41.92C71.5257 41.7493 71.2964 41.456 71.1577 41.04C71.019 40.6133 70.9497 40.016 70.9497 39.248V35.072H69.8137V34H70.9497V31.552H72.1817V34H74.6937V35.072H72.1817V38.88C72.1817 39.4453 72.203 39.888 72.2457 40.208C72.299 40.5173 72.4057 40.736 72.5657 40.864C72.7257 40.992 72.9764 41.056 73.3177 41.056C73.4244 41.056 73.563 41.0507 73.7337 41.04C73.9044 41.0293 74.075 41.0187 74.2457 41.008C74.427 40.9867 74.587 40.9707 74.7257 40.96L74.8057 42C74.571 42.032 74.2937 42.0693 73.9737 42.112C73.6537 42.1547 73.387 42.176 73.1737 42.176ZM76.1591 42V34H77.3911V42H76.1591ZM76.1591 32.24V30.8H77.3911V32.24H76.1591ZM82.6503 42.16C81.8077 42.16 81.1463 42.0213 80.6663 41.744C80.1863 41.456 79.845 40.9973 79.6423 40.368C79.4503 39.7387 79.3543 38.9067 79.3543 37.872C79.3543 36.9013 79.461 36.1227 79.6743 35.536C79.8983 34.9387 80.2557 34.5067 80.7463 34.24C81.237 33.9733 81.877 33.84 82.6663 33.84C82.8477 33.84 83.0663 33.856 83.3223 33.888C83.589 33.9093 83.861 33.9413 84.1383 33.984C84.4157 34.016 84.6557 34.048 84.8583 34.08L84.8103 35.104C84.629 35.0827 84.421 35.0613 84.1863 35.04C83.9517 35.0187 83.7223 35.0027 83.4983 34.992C83.2743 34.9707 83.0877 34.96 82.9383 34.96C82.3303 34.96 81.8557 35.056 81.5143 35.248C81.1837 35.44 80.949 35.7493 80.8103 36.176C80.6823 36.592 80.6183 37.1573 80.6183 37.872C80.6183 38.6507 80.677 39.2747 80.7943 39.744C80.9117 40.2027 81.1357 40.5333 81.4663 40.736C81.797 40.9387 82.2877 41.04 82.9383 41.04C83.0877 41.04 83.2743 41.0347 83.4983 41.024C83.733 41.0027 83.9677 40.9813 84.2023 40.96C84.4477 40.9387 84.661 40.9227 84.8423 40.912L84.8743 41.936C84.661 41.968 84.4157 42 84.1383 42.032C83.861 42.064 83.589 42.0907 83.3223 42.112C83.0557 42.144 82.8317 42.16 82.6503 42.16ZM86.6591 42V30.528H87.8911V37.28L89.1231 37.232L91.3631 34H92.7871L90.2111 37.696L92.9151 42H91.4911L89.1551 38.32L87.8911 38.384V42H86.6591ZM97.1942 42.16C96.3942 42.16 95.7595 42.0053 95.2902 41.696C94.8315 41.3867 94.5009 40.928 94.2982 40.32C94.0955 39.712 93.9942 38.9547 93.9942 38.048C93.9942 37.0347 94.1329 36.224 94.4102 35.616C94.6875 34.9973 95.0769 34.5493 95.5782 34.272C96.0795 33.984 96.6715 33.84 97.3542 33.84C98.4209 33.84 99.2262 34.1387 99.7702 34.736C100.314 35.3227 100.586 36.272 100.586 37.584L100.522 38.528H95.2582C95.2689 39.36 95.4235 39.9893 95.7222 40.416C96.0209 40.8427 96.5595 41.056 97.3382 41.056C97.6369 41.056 97.9622 41.0507 98.3142 41.04C98.6769 41.0187 99.0342 40.9973 99.3862 40.976C99.7382 40.9547 100.037 40.9333 100.282 40.912L100.314 41.888C100.058 41.9307 99.7435 41.9733 99.3702 42.016C99.0075 42.0587 98.6342 42.0907 98.2502 42.112C97.8662 42.144 97.5142 42.16 97.1942 42.16ZM95.2582 37.52H99.3382C99.3382 36.5387 99.1782 35.856 98.8582 35.472C98.5489 35.0773 98.0475 34.88 97.3542 34.88C96.6822 34.88 96.1649 35.0827 95.8022 35.488C95.4395 35.8933 95.2582 36.5707 95.2582 37.52ZM105.064 42.176C104.51 42.176 104.067 42.0907 103.736 41.92C103.416 41.7493 103.187 41.456 103.048 41.04C102.91 40.6133 102.84 40.016 102.84 39.248V35.072H101.704V34H102.84V31.552H104.072V34H106.584V35.072H104.072V38.88C104.072 39.4453 104.094 39.888 104.136 40.208C104.19 40.5173 104.296 40.736 104.456 40.864C104.616 40.992 104.867 41.056 105.208 41.056C105.315 41.056 105.454 41.0507 105.624 41.04C105.795 41.0293 105.966 41.0187 106.136 41.008C106.318 40.9867 106.478 40.9707 106.616 40.96L106.696 42C106.462 42.032 106.184 42.0693 105.864 42.112C105.544 42.1547 105.278 42.176 105.064 42.176Z"
              fill="white"
            />
          </svg>

          <p className="text-[#5C4E45] text-lg  max-w-[400px] py-8 md:py-0">
            و كيفما عودناكم بالحفاظ على عنصر الهوية المغربية ديالنا هاد العام
            رجعات بذوق فريد من اعماق تقافتنا
          </p>
          <svg
            width="191"
            height="46"
            viewBox="0 0 191 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M108.465 27.1507C109.371 26.8434 110.193 26.9586 110.931 27.4965C111.684 28.0189 112.798 28.5183 114.273 28.9947V31C112.982 30.9539 111.784 30.5544 110.677 29.8014C109.571 29.0331 108.526 29.6478 107.543 31.6454C106.559 33.643 105.199 35.8327 103.463 38.2145C101.726 40.6117 99.8902 42.3481 97.954 43.4237C96.0332 44.4993 94.0817 45.1371 92.0995 45.3368C90.1172 45.5519 88.2732 45.2907 86.5676 44.5531C84.8465 43.8309 83.7017 42.9166 83.1332 41.8102C82.5493 40.7039 82.3265 40.0354 82.4647 39.8049C82.5877 39.5744 82.9718 39.7127 83.6172 40.2198C85.9375 41.9255 88.4115 42.7015 91.0392 42.5478C93.6515 42.3942 95.8796 41.6796 97.7235 40.4042C99.5829 39.1288 101.342 37.2848 103.002 34.8723C104.661 32.4598 105.76 30.6466 106.298 29.4326C106.851 28.2033 107.573 27.4427 108.465 27.1507ZM121.856 15.9025C121.856 18.3304 121.703 20.2051 121.395 21.5266C121.103 22.8481 120.888 23.9238 120.75 24.7536C120.612 25.568 120.566 26.1212 120.612 26.4131C120.673 26.951 121.019 27.4657 121.649 27.9575C122.294 28.4492 122.97 28.7411 123.677 28.8333V30.8848C122.463 30.8694 121.503 30.6543 120.796 30.2394C120.089 29.8091 119.498 29.1791 119.021 28.3493C118.668 28.8564 118.322 29.2867 117.984 29.6401C117.646 29.9935 117.216 30.2931 116.693 30.539C116.186 30.7695 115.333 30.9155 114.135 30.977V28.9716C114.826 28.9102 115.341 28.7796 115.679 28.5798C116.017 28.3647 116.34 28.0881 116.647 27.75C116.955 27.412 117.3 26.8511 117.684 26.0674C118.069 25.2837 118.399 24.3003 118.676 23.1171C118.952 21.9338 119.114 20.2589 119.16 18.0923C118.868 16.3251 119.114 15.1112 119.897 14.4504C120.681 13.7743 121.334 14.2583 121.856 15.9025ZM130.246 16.11L131.03 15.9717C132.413 15.8027 133.028 16.256 132.874 17.3316C132.69 18.5609 132.329 19.4599 131.791 20.0284H131.583C131.322 19.8901 131.191 19.6904 131.191 19.4291L131.284 18.5302C131.238 17.9924 130.984 17.7849 130.523 17.9079L129.855 18.0692L128.794 18.5302C127.765 19.1141 127.212 19.8748 127.135 20.8121L127.25 21.3192C127.711 22.3026 128.664 22.9711 130.108 23.3245C130.907 23.4628 131.829 23.3245 132.874 22.9096C134.103 22.3718 134.933 22.1029 135.363 22.1029H135.755C136.355 22.1029 136.654 22.3718 136.654 22.9096V23.0018C136.654 23.7087 135.817 24.3003 134.142 24.7766C132.436 25.1915 130.938 26.3056 129.647 28.1188C128.356 29.9167 126.336 30.8694 123.585 30.977V28.9255C124.307 28.8794 125.129 28.5875 126.051 28.0497C126.973 27.5118 127.68 26.6283 128.172 25.399C126.804 24.8765 125.836 24.1543 125.268 23.2323C124.715 22.3103 124.676 21.2116 125.153 19.9362C125.998 18.4303 127.465 17.2317 129.555 16.3405L130.246 16.11ZM150.622 28.9486V31C149.378 31 148.532 30.9155 148.087 30.7465C147.641 30.5621 147.28 30.3469 147.003 30.1011C146.727 29.8398 146.504 29.5095 146.335 29.1099C146.181 28.7104 146.097 28.2571 146.081 27.75C146.066 27.2276 146.097 26.6052 146.174 25.883C146.266 25.1454 146.366 24.4001 146.473 23.6472C146.596 22.8942 146.704 22.1029 146.796 21.2731C146.888 20.4433 146.965 19.7441 147.027 19.1756C147.088 18.5917 147.411 17.7311 147.995 16.594C148.24 16.0408 148.594 15.7335 149.055 15.6721C149.531 15.6106 149.785 15.9563 149.816 16.7093C149.693 17.954 149.585 18.8606 149.493 19.4291C149.416 19.9977 149.331 20.6354 149.239 21.3422C149.147 22.0337 149.009 22.9941 148.824 24.2234C148.64 25.4527 148.54 26.2441 148.525 26.5975C148.509 26.951 148.525 27.266 148.571 27.5426C148.617 27.8038 148.724 28.042 148.894 28.2571C149.063 28.4569 149.247 28.6028 149.447 28.695C149.646 28.7872 150.038 28.8718 150.622 28.9486ZM153.803 36.2322C153.742 36.4013 153.749 36.5549 153.826 36.6932C153.918 36.8469 154.003 36.9621 154.08 37.039C154.157 37.1158 154.203 37.208 154.218 37.3156C154.249 37.4385 154.226 37.5691 154.149 37.7074C154.087 37.8457 153.995 37.9533 153.872 38.0301C153.765 38.1069 153.565 38.13 153.273 38.0993C152.981 38.0839 152.689 38.0224 152.397 37.9149C152.12 37.8073 151.898 37.6921 151.729 37.5691C151.56 37.4616 151.406 37.2925 151.268 37.062C151.129 36.8469 151.045 36.6395 151.014 36.4397C150.999 36.2399 150.999 36.0171 151.014 35.7713C151.045 35.5408 151.122 35.3103 151.245 35.0798C151.368 34.8493 151.498 34.6572 151.636 34.5035C151.79 34.3499 151.974 34.2346 152.19 34.1578C152.405 34.081 152.628 34.0425 152.858 34.0425C153.104 34.0425 153.319 34.0886 153.503 34.1808C153.703 34.2884 153.849 34.3883 153.941 34.4805C154.049 34.588 154.126 34.7187 154.172 34.8723C154.218 35.026 154.218 35.172 154.172 35.3103C154.141 35.4639 154.087 35.6099 154.011 35.7482C153.949 35.9019 153.88 36.0632 153.803 36.2322ZM158.805 31C157.56 30.9232 156.669 30.708 156.131 30.3546C155.593 30.0012 155.248 29.5863 155.094 29.1099C154.956 28.6182 154.802 28.5491 154.633 28.9025C154.464 29.2406 154.21 29.5556 153.872 29.8475C153.534 30.1241 153.165 30.3546 152.766 30.539C152.382 30.7234 151.629 30.8771 150.507 31V28.8794C151.183 28.9255 151.782 28.7565 152.305 28.3724C152.843 27.9728 153.188 27.5656 153.342 27.1507C153.496 26.7358 153.642 26.2979 153.78 25.8369C153.918 25.3759 154.08 24.9994 154.264 24.7075C154.464 24.4155 154.756 24.2542 155.14 24.2234C155.539 24.1773 155.816 24.3233 155.97 24.6614C156.139 24.9841 156.223 25.3759 156.223 25.8369C156.239 26.2979 156.3 26.7128 156.408 27.0816C156.515 27.435 156.638 27.727 156.776 27.9575C156.93 28.188 157.222 28.4031 157.652 28.6028C158.083 28.8026 158.467 28.8871 158.805 28.8564V31ZM157.237 38.0071C158.513 37.1619 159.98 36.7393 161.64 36.7393C162.024 36.7393 162.362 36.7547 162.654 36.7854C162.946 36.8315 163.2 36.9007 163.415 36.9929C164.106 37.2234 164.452 37.4846 164.452 37.7766C164.452 38.1761 163.96 38.4834 162.977 38.6985C162.47 38.7139 161.932 38.7293 161.363 38.7446C160.795 38.7754 160.242 38.8753 159.704 39.0443C159.197 39.198 158.597 39.5514 157.906 40.1046C157.798 40.1507 157.683 40.1814 157.56 40.1968C157.422 40.2121 157.314 40.2198 157.237 40.2198C156.654 40.0508 156.362 39.6974 156.362 39.1595C156.362 38.7754 156.654 38.3912 157.237 38.0071ZM163.899 22.7252C164.606 23.3706 164.79 24.4078 164.452 25.8369C163.484 29.1407 161.548 30.8463 158.643 30.9539V28.9025C161.025 29.0408 162.185 27.5272 162.124 24.3617C162.078 22.9019 162.669 22.3564 163.899 22.7252ZM171.759 29.6631C172.143 29.2636 172.596 29.0331 173.119 28.9716C173.641 28.8948 174.225 28.9102 174.87 29.0177V31C174.01 30.9078 173.372 31.2996 172.957 32.1755C172.558 33.0514 171.997 34.1732 171.275 35.5408C170.552 36.9237 168.532 38.3989 165.213 39.9663C162.923 40.3351 162.631 39.7281 164.337 38.1454C165.658 37.039 166.78 36.1324 167.702 35.4255C168.624 34.734 169.369 33.7506 169.938 32.4752C170.506 31.2151 171.113 30.2778 171.759 29.6631ZM175.908 11.8689C177.306 10.9776 178.927 10.532 180.771 10.532C181.186 10.532 181.555 10.5551 181.877 10.6012C182.2 10.6473 182.484 10.7087 182.73 10.7856H182.707C183.476 11.0468 183.86 11.3234 183.86 11.6153C183.86 12.061 183.33 12.3068 182.269 12.3529C181.701 12.3837 181.101 12.4144 180.471 12.4451C179.857 12.4605 179.25 12.5604 178.65 12.7448C178.097 12.8984 177.437 13.2749 176.668 13.8742V13.8511C176.545 13.9126 176.43 13.951 176.322 13.9664C176.23 13.9818 176.13 13.9894 176.023 13.9894C175.301 13.9894 174.94 13.6975 174.94 13.1136C174.94 12.6987 175.262 12.2838 175.908 11.8689ZM174.755 28.9025C175.185 28.8871 175.593 28.818 175.977 28.695C176.361 28.5721 176.899 28.2264 177.59 27.6578C176.499 27.0893 175.931 26.4055 175.885 25.6064C175.854 24.8074 175.915 24.1543 176.069 23.6472C176.238 23.1401 176.591 22.61 177.129 22.0568C177.682 21.5036 178.328 21.2654 179.065 21.3422C179.818 21.4037 180.402 21.6573 180.817 22.1029C181.232 22.5331 181.516 23.3091 181.67 24.4309C181.655 25.4758 181.455 26.4823 181.071 27.4504C180.687 28.4031 179.795 29.2406 178.397 29.9628C176.999 30.685 175.792 31.0307 174.778 31L174.755 28.9025Z"
              fill="#78543E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.77832 17.9706L3.45051 9.37012H0C0.690958 11.4014 1.41064 13.4406 2.10231 15.4724C3.154 18.5269 3.80964 20.8299 4.10686 22.4004V31.2704H7.38663V22.4004L11.3313 9.37012H8.0155L5.77832 17.9706ZM28.0729 14.9506V27.4239C27.4178 28.35 26.7973 28.8081 26.2061 28.8081C25.8091 28.8081 25.577 28.5737 25.5117 28.1159C25.4761 28.0192 25.4761 27.6592 25.4761 26.9663V14.9506H22.5283V27.8558C22.5283 29.0077 22.6275 29.7875 22.7907 30.2823C23.0856 31.1088 23.7427 31.4952 24.6945 31.4952C25.7731 31.4952 26.896 30.8398 28.0729 29.4905V31.2706H31.0305V14.9508L28.0729 14.9506ZM15.7265 14.7543C14.2534 14.7543 13.102 15.3108 12.2847 16.4269C11.6557 17.2515 11.3583 18.5269 11.3583 20.2713V25.9868C11.3583 27.7213 11.6557 29.0079 12.2847 29.8245C13.1022 30.9374 14.2536 31.4952 15.7265 31.4952C17.2083 31.4952 18.359 30.9374 19.177 29.8245C19.7969 29.0079 20.0947 27.7213 20.0947 25.9868V20.2713C20.0947 18.527 19.7969 17.2515 19.177 16.4269C18.359 15.3108 17.2083 14.7543 15.7265 14.7543ZM17.1371 26.5431C17.1371 28.0533 16.6799 28.8081 15.7265 28.8081C14.7731 28.8081 14.3153 28.0533 14.3153 26.5431V19.6779C14.3153 18.1681 14.7731 17.4151 15.7265 17.4151C16.68 17.4151 17.1371 18.1681 17.1371 19.6779V26.5431Z"
              fill="#78543E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M74.0643 17.6083C73.0856 17.6083 72.5974 18.3537 72.5974 19.8473V21.343H75.5233V19.8473C75.5234 18.3535 75.033 17.6083 74.0643 17.6083ZM63.2059 17.6083C62.7249 17.6083 62.2368 17.8372 61.7471 18.3199V28.1628C62.2368 28.652 62.7248 28.8829 63.2059 28.8829C64.0499 28.8829 64.4797 28.1628 64.4797 26.7038V19.8125C64.4797 18.3535 64.0499 17.6083 63.2059 17.6083ZM81.2181 9.05401C80.626 6.47875 78.5192 4.57946 75.9843 4.29615C70.3497 3.66675 64.651 3.625 58.9699 3.625C58.5974 3.625 58.2245 3.62536 57.8522 3.62536C57.4797 3.62536 57.1073 3.625 56.7347 3.625C51.0538 3.625 45.3545 3.66657 39.7203 4.29615C37.1852 4.57946 35.0797 6.47875 34.4874 9.05401C33.6446 12.7216 33.6348 16.7241 33.6348 20.5V20.771C33.6351 24.4674 33.6549 28.3655 34.4777 31.9459C35.07 34.521 37.1754 36.4203 39.7105 36.7034C45.3513 37.3339 51.0561 37.3747 56.7436 37.3747C57.1098 37.3747 57.4765 37.3747 57.8424 37.3744C58.2088 37.3747 58.5745 37.3747 58.941 37.3747C64.6283 37.3747 70.3339 37.3339 75.9743 36.7034C78.5094 36.4203 80.616 34.521 81.2083 31.9459C82.0391 28.33 82.0557 24.3889 82.056 20.6599V20.5C82.056 16.7241 82.0609 12.7216 81.2181 9.05401ZM47.4464 12.6977H43.9422V31.3204H40.6867V12.6977H37.2449V9.64631H47.4464V12.6977ZM56.2881 31.3204H53.3612V29.5589C52.198 30.8931 51.0926 31.5427 50.0169 31.5427C49.0742 31.5427 48.4243 31.1598 48.1315 30.3422C47.9722 29.853 47.8739 29.0804 47.8739 27.9405V15.1699H50.799V27.0605C50.799 27.7463 50.799 28.102 50.8261 28.1987C50.8973 28.652 51.1199 28.8829 51.511 28.8829C52.0983 28.8829 52.7117 28.4308 53.3612 27.5142V15.1699H56.2881V31.3204ZM67.4045 26.4726C67.4045 27.9673 67.3046 29.0434 67.1108 29.7282C66.7183 30.9286 65.9362 31.5427 64.7714 31.5427C63.7311 31.5427 62.7249 30.9647 61.7473 29.7549V31.3202H58.8215V9.64631H61.7471V16.7254C62.6919 15.5625 63.6951 14.9747 64.7712 14.9747C65.936 14.9747 66.7181 15.5877 67.1106 16.7971C67.3046 17.447 67.4043 18.5144 67.4043 20.0426V26.4726H67.4045ZM78.4478 23.7782H72.5974V26.6421C72.5974 28.1368 73.0854 28.8831 74.0907 28.8831C74.8121 28.8831 75.231 28.4915 75.3982 27.7084C75.4248 27.549 75.4624 26.9005 75.4624 25.7267H78.4477V26.1542C78.4477 27.0954 78.4129 27.7464 78.3854 28.0383C78.2878 28.6882 78.058 29.2748 77.7016 29.7924C76.8927 30.9648 75.692 31.5431 74.1638 31.5431C72.6331 31.5431 71.4681 30.9921 70.622 29.8889C70.0001 29.0807 69.6811 27.8075 69.6811 26.0914V20.4356C69.6811 18.7098 69.9647 17.4472 70.5861 16.6305C71.4325 15.5251 72.5971 14.975 74.0905 14.975C75.5586 14.975 76.7237 15.5251 77.5433 16.6305C78.1561 17.4472 78.4477 18.7098 78.4477 20.4356V23.7782H78.4478Z"
              fill="#78543E"
            />
          </svg>
        </div>
      </div>
      <Image
        src="/blabla-people.png"
        alt="BlablaConf Taxi"
        width={900}
        height={900}
        className="mx-auto mt-0 rounded-xl"
      />
    </div>
  );
};
