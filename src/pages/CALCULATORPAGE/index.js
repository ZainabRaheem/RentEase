import React from "react";

import { Stack, Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const CALCULATORPAGEPage = () => {
  const navigate = useNavigate();

  function handleNavigate44() {
    navigate("/");
  }
  function handleNavigate45() {
    navigate("/aboutuspage");
  }
  function handleNavigate46() {
    navigate("/propertiespage");
  }
  function handleNavigate47() {
    navigate("/contactuspage");
  }
  function handleNavigate81() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-overpass items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <Stack className="h-[134px] relative w-[100%]">
            <div className="absolute bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[11px] sm:p-[4px] md:p-[5px] shadow-bs top-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[26px] ml-[51px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
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
                <Stack className="border-bw15 border-solid border-white_A700 h-[55px] p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] relative rounded-radius15 w-[22%]">
                  <Img
                    src="images/img_menu_22X31.svg"
                    className="absolute h-[22px] inset-y-[0] max-w-[100%] my-[auto] right-[8%] w-[9%]"
                    alt="menu"
                  />
                </Stack>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap font-lato inset-x-[0] items-center justify-center sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[31%]">
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                <Text
                  className="common-pointer font-normal not-italic text-black_901 w-[auto]"
                  variant="body8"
                  onClick={handleNavigate44}
                >
                  Home
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center md:ml-[32px] ml-[63px] sm:mx-[0] p-[12px] md:p-[6px] sm:px-[0] sm:py-[4px] rounded-bl-[6px] rounded-br-[6px] rounded-tl-[0] rounded-tr-[0] sm:w-[100%] w-[16%]"
                onClick={handleNavigate45}
              >
                <Text
                  className="font-normal sm:my-[12px] md:my-[16px] my-[31px] not-italic text-black_901 w-[auto]"
                  variant="body8"
                >
                  About Us
                </Text>
              </div>
              <Text
                className="common-pointer font-normal sm:ml-[25px] md:ml-[32px] ml-[63px] not-italic text-black_901 w-[auto]"
                variant="body8"
                onClick={handleNavigate46}
              >
                Properties
              </Text>
              <Text
                className="font-normal sm:ml-[25px] md:ml-[32px] ml-[63px] not-italic text-indigo_400 w-[auto]"
                variant="body8"
              >
                Calculator
              </Text>
              <Text
                className="common-pointer font-normal sm:ml-[25px] md:ml-[32px] ml-[63px] not-italic text-black_901 w-[auto]"
                variant="body8"
                onClick={handleNavigate47}
              >
                Contacts
              </Text>
            </div>
          </Stack>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[1403px] ml-[auto] mr-[auto] md:mt-[118px] mt-[230px] sm:mt-[91px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
              <Text
                className="font-normal leading-[120.00px] md:leading-[normal] sm:leading-[normal] not-italic text-black_900 sm:tracking-ls3 md:tracking-ls4 tracking-ls96 w-[100%]"
                as="h2"
                variant="h2"
              >
                CALCULATE YOUR APARTMENT <br />
                FEE
              </Text>
              <Text
                className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] ml-[3px] sm:mx-[0] not-italic text-black_900 md:tracking-ls11 sm:tracking-ls11 tracking-ls12000000000000002 sm:w-[100%] w-[91%]"
                variant="body10"
              >
                Enter the information about your investment property to check
                your LandLord services property management charges. The price of
                our rental management depends on the kind and number of rental
                properties, the total rental income, and the package you choose.
                Please keep in mind that you are calculating the real estate
                costs for a single rental property.
              </Text>
              <Text
                className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] md:ml-[4px] ml-[8px] sm:mt-[17px] md:mt-[23px] mt-[45px] sm:mx-[0] not-italic text-black_900 md:tracking-ls11 sm:tracking-ls11 tracking-ls12000000000000002 sm:w-[100%] w-[85%]"
                variant="body10"
              >
                Our property management services are specifically designed to
                meet the needs of Lagos real estate investors. We provide three
                management programs: Standard, Enhanced, and the more flexible
                Enterprise program.
              </Text>
            </div>
            <div className="flex flex-col md:ml-[42px] ml-[82px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
              <Text
                className="not-italic text-black_900 md:tracking-ls11 sm:tracking-ls11 tracking-ls28000000000000003 w-[auto]"
                variant="body2"
              >
                <span className="text-black_900 text-[28px] font-overpass font-normal sm:text-[24px] md:text-[26px]">
                  FEE CALCULATOR:{" "}
                </span>
                <span className="text-black_900 text-[28px] font-overpass font-thin sm:text-[24px] md:text-[26px]">
                  MONTH
                </span>
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[26px] sm:px-[0] w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 w-[100%]"
                  wrapClassName="sm:mx-[0] sm:w-[100%] w-[58%]"
                  name="SearchcalFX"
                  placeholder="Search Property"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineBlack900"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900_6b text-black_900_6b w-[100%]"
                  wrapClassName="sm:mx-[0] sm:w-[100%] w-[38%]"
                  name="calculatedamou"
                  placeholder="A/12 +15%"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineBlack900"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-normal min-w-[25%] ml-[1px] md:mt-[10px] mt-[21px] sm:mt-[8px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-indigo_400 w-[max-content]"
                size="lg"
                variant="OutlineIndigo400_3"
              >
                CALCULATE
              </Button>
              <Text
                className="ml-[1px] sm:mt-[22px] md:mt-[29px] mt-[57px] not-italic text-black_900 md:tracking-ls11 sm:tracking-ls11 tracking-ls28000000000000003 w-[auto]"
                variant="body2"
              >
                <span className="text-black_900 text-[28px] font-overpass font-normal sm:text-[24px] md:text-[26px]">
                  FEE CALCULATOR:
                </span>
                <span className="text-black_900 text-[28px] font-overpass font-thin sm:text-[24px] md:text-[26px]">
                  {" "}
                  QUARTERLY
                </span>
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[18px] sm:mt-[7px] md:mt-[9px] sm:px-[0] w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 w-[100%]"
                  wrapClassName="sm:mx-[0] sm:w-[100%] w-[58%]"
                  name="SearchcalFX One"
                  placeholder="Search Property"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineBlack900"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900_6b text-black_900_6b w-[100%]"
                  wrapClassName="sm:mx-[0] sm:w-[100%] w-[39%]"
                  name="calculatedamou One"
                  placeholder="A/4 +10%"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineBlack900"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-normal min-w-[25%] md:mt-[10px] mt-[21px] sm:mt-[8px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-indigo_400 w-[max-content]"
                size="lg"
                variant="OutlineIndigo400_3"
              >
                CALCULATE
              </Button>
              <Text
                className="sm:mt-[22px] md:mt-[29px] mt-[57px] not-italic text-black_900 md:tracking-ls11 sm:tracking-ls11 tracking-ls28000000000000003 w-[auto]"
                variant="body2"
              >
                FEE CALCULATOR: BIANNUALLY
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[18px] sm:mt-[7px] md:mt-[9px] w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900 text-black_900 w-[100%]"
                  wrapClassName="sm:mx-[0] sm:w-[100%] w-[58%]"
                  name="SearchcalFX Two"
                  placeholder="Search Property"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineBlack900"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] sm:text-[20px] md:text-[22px] text-[24px] placeholder:text-black_900_6b text-black_900_6b w-[100%]"
                  wrapClassName="sm:mx-[0] sm:w-[100%] w-[39%]"
                  name="calculatedamou Two"
                  placeholder="A/2 +5%"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineBlack900"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-normal min-w-[25%] ml-[1px] md:mt-[10px] mt-[21px] sm:mt-[8px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-center text-indigo_400 w-[max-content]"
                size="lg"
                variant="OutlineIndigo400_3"
              >
                CALCULATE
              </Button>
            </div>
          </div>
          <footer className="bg-bluegray_100_7f md:mt-[127px] mt-[247px] sm:mt-[98px] w-[100%]">
            <div className="flex flex-col justify-start max-w-[1804px] sm:mb-[19px] md:mb-[25px] mb-[49px] md:ml-[46px] ml-[auto] md:mr-[12px] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                  className="font-medium sm:ml-[215px] md:ml-[278px] ml-[539px] sm:mt-[15px] md:mt-[20px] mt-[40px] text-black_901 w-[auto]"
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
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[141px] ml-[275px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
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
                    734 Broadway, Floor 5, Spring Towers, Victoria Island, Lagos
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
                  className="common-pointer sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:w-[12px] md:w-[16px] w-[32px]"
                  onClick={handleNavigate81}
                  alt="twitter"
                />
                <Img
                  src="images/img_volume_32X32.svg"
                  className="sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[17px] sm:ml-[6px] md:ml-[8px] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:w-[12px] md:w-[16px] w-[32px]"
                  alt="volume Two"
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
    </>
  );
};

export default CALCULATORPAGEPage;
