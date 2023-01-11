import React from "react";

import { Stack, Img, Text, Input, Button, Line } from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const LoginPagePage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  function handleNavigate70() {
    navigate("/propertiespage");
  }
  function handleNavigate71() {
    navigate("/propertiespage");
  }
  function handleNavigate76() {
    navigate("/calculatorpage");
  }
  function handleNavigate77() {
    navigate("/contactuspage");
  }
  function handleNavigate78() {
    navigate("/propertiespage");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-overpass items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pt-[15px] pt-[19px] md:pt-[9px] sm:px-[15px] px-[19px] md:px-[9px] shadow-bs w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1769px] md:ml-[22px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                  <Stack className="h-[71px] mb-[12px] sm:mb-[4px] md:mb-[6px] relative w-[21%]">
                    <Img
                      src="images/img_volume.svg"
                      className="absolute h-[71px] left-[0] max-w-[100%] sm:w-[100%] w-[51%]"
                      alt="volume"
                    />
                    <Img
                      src="images/img_bookmark.svg"
                      className="absolute h-[71px] max-w-[100%] right-[0] sm:w-[100%] w-[51%]"
                      alt="bookmark"
                    />
                  </Stack>
                  <Text
                    className="ml-[18px] sm:ml-[7px] md:ml-[9px] sm:mt-[11px] md:mt-[15px] mt-[30px] text-indigo_400 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    RentEase{" "}
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato md:ml-[162px] ml-[314px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%] common-row-list">
                  <ul className="flex flex-row items-center justify-center">
                    <li className="w-[8%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:my-[22px] flex-col flex my-[43px]">
                      <div className="flex flex-col items-center justify-start">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-black_901 w-[auto]"
                          variant="body8"
                          rel="noreferrer"
                        >
                          Home
                        </a>
                      </div>
                    </li>
                    <li className="w-[16%] ml-[63px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[32px] flex-col flex">
                      <div className="flex flex-col items-center justify-start p-[12px] sm:p-[4px] md:p-[6px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal sm:my-[12px] md:my-[16px] my-[31px] not-italic text-black_901 w-[auto]"
                          variant="body8"
                          rel="noreferrer"
                        >
                          About Us
                        </a>
                      </div>
                    </li>
                    <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-black_901"
                        rel="noreferrer"
                      >
                        Properties
                      </a>
                    </li>
                    <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901"
                        onClick={handleNavigate76}
                        rel="noreferrer"
                      >
                        Calculator
                      </a>
                    </li>
                    <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                      <a
                        href={"javascript:"}
                        className="common-pointer cursor-pointer font-normal not-italic text-[16px] text-black_901"
                        onClick={handleNavigate77}
                        rel="noreferrer"
                      >
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
                <Img
                  src="images/img_menu.svg"
                  className="sm:h-[18px] md:h-[24px] h-[45px] max-w-[100%] sm:ml-[201px] md:ml-[260px] ml-[504px] sm:w-[17px] md:w-[23px] w-[45px]"
                  alt="menu"
                />
              </div>
            </div>
          </header>
          <div className="flex flex-col justify-start w-[100%]">
            <Img
              src="images/img_image2.png"
              className="max-w-[100%] w-[100%]"
              alt="imageTwo"
            />
            <Text
              className="font-opensans font-semibold sm:ml-[363px] md:ml-[469px] ml-[910px] mt-[154px] sm:mt-[61px] md:mt-[79px] text-bluegray_901 w-[auto]"
              variant="body4"
            >
              Welcome
            </Text>
            <Input
              className="font-lato font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
              wrapClassName="flex md:ml-[318px] md:mt-[32px] ml-[618px] mt-[63px] sm:mt-[25px] sm:mx-[0] sm:w-[100%] w-[36%]"
              type="email"
              name="Email"
              placeholder="Email"
              prefix={
                <Img
                  src="images/img_mail_24X24.svg"
                  className="ml-[4px] mr-[10px] sm:mr-[3px] md:mr-[5px] my-[auto]"
                  alt="mail"
                />
              }
            ></Input>
            <Input
              className="font-lato font-normal not-italic p-[0] text-[18px] placeholder:text-gray_400 text-gray_400 w-[100%]"
              wrapClassName="flex md:ml-[318px] md:mt-[19px] ml-[618px] mt-[37px] sm:mt-[14px] sm:mx-[0] sm:w-[100%] w-[36%]"
              type="password"
              name="Password"
              placeholder="Password"
              prefix={
                <Img
                  src="images/img_lock.svg"
                  className="ml-[4px] mr-[10px] sm:mr-[3px] md:mr-[5px] my-[auto]"
                  alt="lock"
                />
              }
              suffix={
                <Img
                  src="images/img_eye.svg"
                  className="ml-[35px] mr-[1px] sm:ml-[13px] md:ml-[18px] my-[auto]"
                  alt="eye"
                />
              }
            ></Input>
            <Text
              className="font-opensans ml-[1185px] sm:ml-[473px] md:ml-[611px] sm:mt-[10px] md:mt-[13px] mt-[26px] not-italic text-indigo_300 w-[auto]"
              variant="body9"
            >
              Forgot password?
            </Text>
            <Button
              className="cursor-pointer font-normal font-overpass min-w-[15%] sm:ml-[329px] md:ml-[425px] ml-[825px] mt-[17px] sm:mt-[6px] md:mt-[8px] not-italic text-[16px] text-center text-indigo_900 w-[max-content]"
              shape="RoundedBorder4"
            >
              Login
            </Button>
            <div className="flex flex-col font-opensans items-center justify-start max-w-[685px] md:ml-[318px] ml-[auto] mr-[auto] sm:mt-[24px] md:mt-[31px] mt-[61px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Line className="bg-indigo_50 h-[1px] sm:mb-[3px] md:mb-[4px] mb-[9px] sm:mt-[2px] md:mt-[3px] mt-[6px] sm:w-[100%] w-[44%]" />
                <Text
                  className="sm:ml-[2px] md:ml-[3px] ml-[7px] not-italic text-gray_600 w-[auto]"
                  variant="body9"
                >
                  {" "}
                  Or
                </Text>
                <Line className="bg-indigo_50 h-[1px] sm:mb-[3px] md:mb-[4px] mb-[9px] ml-[4px] sm:mt-[2px] md:mt-[3px] mt-[6px] sm:w-[100%] w-[44%]" />
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center justify-between sm:mt-[3px] md:mt-[4px] mt-[8px] w-[100%]">
                <div
                  className="common-pointer bg-white_A700 border border-indigo_400 border-solid flex flex-col items-center sm:mx-[0] p-[1px] rounded-radius285 shadow-bs2 sm:w-[100%] w-[48%]"
                  onClick={handleNavigate71}
                >
                  <Button
                    className="flex items-center justify-center min-w-[81%] mt-[1px] text-center w-[max-content]"
                    onClick={googleSignIn}
                    leftIcon={
                      <Img
                        src="images/img_google.svg"
                        className="mr-[15px] sm:mr-[5px] md:mr-[7px] text-center"
                        alt="google"
                      />
                    }
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillWhiteA700"
                  >
                    <div className="common-pointer bg-transparent cursor-pointer font-medium text-[20px] text-indigo_400">
                      Continue with Google
                    </div>
                  </Button>
                </div>
                <Stack className="bg-white_A700 font-lato h-[54px] my-[1px] relative rounded-radius27 sm:w-[100%] w-[48%]">
                  <div
                    className="common-pointer absolute bg-white_A700 sm:h-[22px] md:h-[28px] h-[54px] right-[0] rounded-radius27 sm:w-[100%] w-[95%]"
                    onClick={handleNavigate70}
                  ></div>
                  <Input
                    className="common-pointer font-bold p-[0] text-[20px] placeholder:text-indigo_400 text-indigo_400 w-[100%]"
                    wrapClassName="absolute flex w-[100%]"
                    onClick={handleNavigate78}
                    name="FrameSix"
                    placeholder="Continue with Facebook"
                    prefix={
                      <div className="w-[24px] h-[24px] ml-[15px] mr-[1px] sm:ml-[5px] sm:h-[10px] sm:w-[9px] md:ml-[7px] md:h-[13px] md:w-[12px] bg-blue_A400 left-[5%] right-[0] absolute flex justify-center items-center">
                        <Img
                          src="images/img_path14.svg"
                          className="absolute my-[auto]"
                          alt="path14"
                        />
                      </div>
                    }
                    shape="CircleBorder27"
                    variant="OutlineIndigo400"
                  ></Input>
                </Stack>
              </div>
            </div>
            <div className="flex flex-col font-lato items-center justify-start max-w-[133px] md:ml-[468px] ml-[auto] mr-[auto] md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="not-italic text-gray_600 w-[auto]"
                variant="body9"
              >
                Have no account yet?
              </Text>
            </div>
            <Button
              className="cursor-pointer font-light font-overpass min-w-[36%] sm:ml-[246px] md:ml-[318px] ml-[618px] md:mt-[12px] mt-[25px] sm:mt-[9px] text-[16px] text-center text-indigo_900 w-[max-content]"
              shape="CircleBorder20"
            >
              Register now
            </Button>
            <footer className="bg-bluegray_100_7f font-overpass md:mt-[105px] mt-[205px] sm:mt-[81px] w-[100%]">
              <div className="flex flex-col justify-start max-w-[1802px] sm:mb-[19px] md:mb-[25px] mb-[49px] md:ml-[46px] ml-[auto] md:mr-[13px] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                  <Text
                    className="font-medium sm:mt-[13px] md:mt-[18px] mt-[35px] text-black_901 w-[auto]"
                    variant="body7"
                  >
                    <span className="text-black_901 text-[18px] font-overpass font-semibold">
                      Phone:
                    </span>
                    <span className="text-black_901 text-[18px] font-overpass">
                      {" "}
                    </span>
                    <span className="text-black_901 text-[18px] font-overpass font-normal not-italic">
                      +234 647 8756 9<br />
                    </span>
                  </Text>
                  <Text
                    className="font-medium sm:ml-[214px] md:ml-[277px] ml-[538px] sm:mt-[15px] md:mt-[20px] mt-[40px] text-black_901 w-[auto]"
                    variant="body7"
                  >
                    <span className="text-black_901 text-[18px] font-overpass font-semibold">
                      Email:
                    </span>
                    <span className="text-black_901 text-[18px] font-overpass font-normal not-italic">
                      {" "}
                      hello@rentease.com
                    </span>
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[141px] ml-[274px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                    <Stack className="h-[71px] mb-[12px] sm:mb-[4px] md:mb-[6px] relative w-[21%]">
                      <Img
                        src="images/img_volume.svg"
                        className="absolute h-[71px] left-[0] max-w-[100%] sm:w-[100%] w-[51%]"
                        alt="volume One"
                      />
                      <Img
                        src="images/img_bookmark.svg"
                        className="absolute h-[71px] max-w-[100%] right-[0] sm:w-[100%] w-[51%]"
                        alt="bookmark One"
                      />
                    </Stack>
                    <Text
                      className="ml-[18px] sm:ml-[7px] md:ml-[9px] sm:mt-[11px] md:mt-[15px] mt-[30px] text-indigo_400 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      RentEase{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[15px] md:mt-[19px] mt-[38px] w-[100%]">
                  <Text
                    className="font-medium leading-[normal] sm:mt-[14px] md:mt-[18px] mt-[36px] sm:mx-[0] text-black_901 sm:w-[100%] w-[22%]"
                    variant="body7"
                  >
                    <span className="text-black_901 text-[18px] font-overpass font-semibold">
                      Address:
                    </span>
                    <span className="text-black_901 text-[18px] font-overpass font-normal not-italic">
                      {" "}
                      734 Broadway, Floor 5, Spring Towers, Victoria Island,
                      Lagos
                    </span>
                  </Text>
                  <div className="flex flex-col items-center justify-start md:ml-[179px] ml-[347px] sm:mt-[14px] md:mt-[18px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                    <Text
                      className="font-semibold text-black_901 w-[auto]"
                      variant="body7"
                    >
                      Follow Us
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[23px] sm:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_plus.svg"
                        className="sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                        alt="plus"
                      />
                      <Img
                        src="images/img_camera.svg"
                        className="sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                        alt="camera"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_twitter.svg"
                    className="sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:w-[12px] md:w-[16px] w-[32px]"
                    alt="twitter"
                  />
                  <Img
                    src="images/img_linkedin.svg"
                    className="sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[17px] sm:ml-[6px] md:ml-[8px] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:w-[12px] md:w-[16px] w-[32px]"
                    alt="linkedin"
                  />
                  <Text
                    className="font-normal leading-[normal] md:ml-[157px] ml-[306px] sm:mx-[0] not-italic text-black_901 sm:w-[100%] w-[33%]"
                    variant="body7"
                  >
                    {`We aim to be the preferred real estate firm for renters and landllords by providing great customer service and developing lifetime friendships one house at a time.  You can be rest assured that we will help you in selecting a payment plan as per your specific requirements and help you maximize your money's potential to the fullest.`}
                    <br />
                  </Text>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
