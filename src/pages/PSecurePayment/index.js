import React from "react";

import { Stack, Img, Text, Button, Radio, List, Line } from "components";
import { useNavigate } from "react-router-dom";

const PSecurePaymentPage = () => {
  const navigate = useNavigate();

  function handleNavigate30() {
    navigate("/ppaymentofrentalpage");
  }
  function handleNavigate83() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Stack className="bg-white_A700 font-overpass h-[2157px] mx-[auto] relative w-[100%]">
        <div className="absolute flex flex-col items-center justify-start w-[100%]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <header className="w-[100%]">
              <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pt-[15px] pt-[19px] md:pt-[9px] sm:px-[15px] px-[19px] md:px-[9px] shadow-bs w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1753px] md:ml-[22px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato md:ml-[162px] ml-[314px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%] common-row-list">
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
                      <li className="w-[17%] ml-[63px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[32px] flex-col flex">
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
                          className="cursor-pointer font-normal not-italic text-[16px] text-black_901"
                          rel="noreferrer"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="w-[auto] ml-[63px] sm:ml-[25px] sm:w-[100%] sm:my-[10px] md:ml-[32px] md:my-[22px] my-[43px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-black_901"
                          rel="noreferrer"
                        >
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Img
                    src="images/img_menu.svg"
                    className="sm:h-[18px] md:h-[24px] h-[45px] max-w-[100%] sm:ml-[210px] md:ml-[272px] ml-[528px] sm:w-[17px] md:w-[23px] w-[45px]"
                    alt="menu"
                  />
                </div>
              </div>
            </header>
            <div className="flex flex-col items-end justify-start sm:mt-[142px] md:mt-[183px] mt-[356px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-center justify-center max-w-[1402px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <div className="flex flex-col mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Payment Details
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mt-[14px] md:mt-[19px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Apartment Name:{" "}
                    </Text>
                    <Text
                      className="font-normal sm:ml-[23px] md:ml-[29px] ml-[58px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      Casa Dinero{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[13px] sm:mt-[5px] md:mt-[6px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-medium sm:mt-[2px] md:mt-[3px] mt-[7px] text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Apartment Type:{" "}
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      1 Bedrooms, 1 Living Room, 1 bathroom
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Apartment address:{" "}
                    </Text>
                    <Text
                      className="font-normal sm:ml-[14px] md:ml-[18px] ml-[36px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      Ikoyi, Lagos
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Number of occupants:{" "}
                    </Text>
                    <Text
                      className="font-normal ml-[11px] sm:ml-[4px] md:ml-[5px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      Two, 2
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                    <Text
                      className="font-medium mb-[1px] text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Tenant’s Name:
                    </Text>
                    <Text
                      className="font-normal sm:ml-[33px] md:ml-[43px] ml-[85px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      Aisha Lawal Jimoh
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] sm:mt-[10px] md:mt-[13px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                    <Text
                      className="font-medium mb-[1px] text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Tenant’s Email
                    </Text>
                    <Text
                      className="font-normal sm:ml-[37px] md:ml-[49px] ml-[95px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      ailawal.ha@gmail.com
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mt-[10px] md:mt-[13px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Telephone Number:
                    </Text>
                    <Text
                      className="font-normal sm:ml-[15px] md:ml-[19px] ml-[38px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      +234 801 345 36 00
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end ml-[3px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                    <Text
                      className="font-medium mb-[1px] text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Address:
                    </Text>
                    <Text
                      className="font-normal ml-[157px] sm:ml-[62px] md:ml-[81px] sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      none
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mt-[10px] md:mt-[13px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Payment Mode:
                    </Text>
                    <Text
                      className="font-normal sm:ml-[32px] md:ml-[42px] ml-[82px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      Bank Transfer
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Length of Contract
                    </Text>
                    <Text
                      className="font-normal sm:ml-[18px] md:ml-[24px] ml-[47px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      Two years, 2
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[3px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                    <Text
                      className="font-medium mb-[1px] text-black_900 w-[auto]"
                      variant="body4"
                    >
                      Date:
                    </Text>
                    <Text
                      className="font-normal md:ml-[100px] ml-[195px] sm:ml-[77px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-black_900 w-[auto]"
                      variant="body7"
                    >
                      Jan 12, 2023
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[2px] ml-[5px] sm:mt-[15px] md:mt-[19px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Button
                      className="flex md:h-[11px] h-[20px] sm:h-[8px] items-center justify-center mb-[15px] sm:mb-[5px] md:mb-[7px] mt-[10px] sm:mt-[3px] md:mt-[5px] md:w-[10px] w-[20px] sm:w-[7px]"
                      shape="icbRoundedBorder2"
                      size="smIcn"
                      variant="icbOutlineIndigo400"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center"
                        alt="checkmark"
                      />
                    </Button>
                    <Text
                      className="font-light leading-[normal] md:ml-[16px] ml-[31px] sm:mx-[0] text-black_900 sm:w-[100%] w-[90%]"
                      variant="body10"
                    >
                      <span className="text-black_900 text-[12px] font-overpass font-normal not-italic">
                        Terms and conditions
                        <br />
                      </span>
                      <span className="text-gray_700 text-[12px] font-overpass">
                        I have read the terms and condition of this policy and i
                        completely agree to the conditions and would wish to
                        proceed with my payment...{" "}
                      </span>
                      <span className="text-black_900 text-[12px] font-overpass">
                        {"Read more>>"}
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[2px] ml-[5px] sm:mt-[15px] md:mt-[19px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Button
                      className="flex md:h-[11px] h-[20px] sm:h-[8px] items-center justify-center mb-[15px] sm:mb-[5px] md:mb-[7px] mt-[10px] sm:mt-[3px] md:mt-[5px] md:w-[10px] w-[20px] sm:w-[7px]"
                      shape="icbRoundedBorder2"
                      size="smIcn"
                      variant="icbOutlineIndigo400"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center"
                        alt="checkmark One"
                      />
                    </Button>
                    <Text
                      className="font-light leading-[normal] md:ml-[16px] ml-[31px] sm:mx-[0] text-black_900 sm:w-[100%] w-[90%]"
                      variant="body10"
                    >
                      <span className="text-black_900 text-[12px] font-overpass font-normal not-italic">
                        Privacy Policy
                        <br />
                      </span>
                      <span className="text-gray_700 text-[12px] font-overpass">
                        I have read the terms and condition of this policy and i
                        completely agree to the conditions and would wish to
                        proceed with my payment...{" "}
                      </span>
                      <span className="text-black_900 text-[12px] font-overpass">
                        {"Read more>>"}
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[2px] ml-[5px] sm:mt-[15px] md:mt-[19px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Button
                      className="flex md:h-[11px] h-[20px] sm:h-[8px] items-center justify-center mb-[15px] sm:mb-[5px] md:mb-[7px] mt-[10px] sm:mt-[3px] md:mt-[5px] md:w-[10px] w-[20px] sm:w-[7px]"
                      shape="icbRoundedBorder2"
                      size="smIcn"
                      variant="icbOutlineIndigo400"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center"
                        alt="checkmark Two"
                      />
                    </Button>
                    <Text
                      className="font-light leading-[normal] md:ml-[16px] ml-[31px] sm:mx-[0] text-black_900 sm:w-[100%] w-[90%]"
                      variant="body10"
                    >
                      <span className="text-black_900 text-[12px] font-overpass font-normal not-italic">
                        Contract Agreement
                        <br />
                      </span>
                      <span className="text-gray_700 text-[12px] font-overpass">
                        I have read the terms and condition of this policy and i
                        completely agree to the conditions and would wish to
                        proceed with my payment...{" "}
                      </span>
                      <span className="text-black_900 text-[12px] font-overpass">
                        {"Read more>>"}
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[15px] md:mt-[19px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <Img
                      src="images/img_computer_28X28.svg"
                      className="flex-shrink-0 sm:h-[12px] md:h-[15px] h-[28px] max-w-[100%] sm:w-[11px] md:w-[14px] w-[28px]"
                      alt="computer"
                    />
                    <Text
                      className="flex-grow font-light leading-[normal] md:ml-[13px] ml-[27px] sm:mx-[0] text-black_900"
                      variant="body10"
                    >
                      <span className="text-black_900 text-[12px] font-overpass font-normal not-italic">
                        Receive Newsletter <br />
                      </span>
                      <span className="text-gray_700 text-[12px] font-overpass">
                        I have read the terms and condition of this policy and i
                        completely agree to the conditions and would wish to
                        proceed with my payment...{" "}
                      </span>
                      <span className="text-black_900 text-[12px] font-overpass">
                        {"Read more>>"}
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end ml-[4px] sm:mt-[22px] md:mt-[28px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                    <Text
                      className="flex-grow font-normal mt-[18px] sm:mt-[7px] md:mt-[9px] not-italic text-black_900"
                      variant="body8"
                    >
                      Enable Auto renewal:
                    </Text>
                    <Img
                      src="images/img_checkmark_32X19.svg"
                      className="flex-shrink-0 max-w-[100%] mb-[2px] md:ml-[122px] ml-[238px] sm:ml-[95px] w-[5%]"
                      alt="checkmark Three"
                    />
                  </div>
                  <Text
                    className="font-light leading-[normal] ml-[4px] mt-[3px] sm:mx-[0] text-black_900 sm:w-[100%] w-[93%]"
                    variant="body10"
                  >
                    Choosing this options svaes your pervious payments and
                    allows for you to automatically have payment done every
                    period. Make sure to turn on this option if you wish to have
                    it. Not all paymet will be announced through emails.{" "}
                  </Text>
                </div>
                <div className="flex flex-col ml-[115px] md:ml-[59px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Payment Plan
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Select your preferred payment option from the dialog box
                    below:
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                    <div className="bg-blue_55 flex flex-col sm:mx-[0] pl-[14px] sm:pl-[5px] md:pl-[7px] py-[14px] sm:py-[5px] md:py-[7px] sm:w-[100%] w-[40%]">
                      <Radio
                        value="MonthlyPayment"
                        className="font-semibold sm:ml-[1px] md:ml-[2px] ml-[5px] sm:pl-[3px] md:pl-[4px] pl-[8px] pr-[4px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        checked={true}
                        name="Label"
                        label="Monthly Payment"
                        variant="OutlineIndigo400"
                      ></Radio>
                      <Text
                        className="font-fw leading-[18.00px] md:leading-[normal] sm:leading-[normal] mb-[19px] sm:mb-[7px] md:mb-[9px] md:ml-[19px] ml-[38px] sm:mx-[0] text-black_900 sm:w-[100%] w-[88%]"
                        variant="body10"
                      >
                        pay monthly and not worry about budgeting thereby
                        enjoying your home
                      </Text>
                    </div>
                    <div className="bg-blue_55 flex flex-col sm:mx-[0] pl-[13px] sm:pl-[5px] md:pl-[6px] py-[13px] sm:py-[5px] md:py-[6px] sm:w-[100%] w-[40%]">
                      <Radio
                        value="QuarterlyPayment"
                        className="font-semibold sm:mr-[27px] md:mr-[35px] mr-[69px] mt-[1px] sm:pl-[3px] md:pl-[4px] pl-[8px] pr-[4px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        checked={false}
                        name="LabelOne"
                        label="Quarterly Payment"
                      ></Radio>
                      <Text
                        className="font-fw leading-[18.00px] md:leading-[normal] sm:leading-[normal] md:mb-[10px] mb-[20px] sm:mb-[7px] md:ml-[20px] ml-[39px] sm:mx-[0] text-black_900 sm:w-[100%] w-[88%]"
                        variant="body10"
                      >
                        pay monthly and not worry about budgeting thereby
                        enjoying your home
                      </Text>
                    </div>
                  </div>
                  <List
                    className="font-overpass gap-[162px] sm:gap-[64px] md:gap-[83px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] mt-[10px] sm:mt-[3px] md:mt-[5px] w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-amber_500_66 flex flex-col items-end justify-end sm:pl-[15px] pl-[18px] md:pl-[9px] sm:py-[15px] py-[18px] md:py-[9px] w-[100%]">
                      <div className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[9px] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:px-[0] w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[3px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-black_900 w-[auto]"
                            variant="body7"
                          >
                            Annual amount:
                          </Text>
                          <Text
                            className="font-thin sm:ml-[22px] md:ml-[29px] ml-[57px] text-black_900 w-[auto]"
                            variant="body7"
                          >
                            N400,000
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[3px] ml-[6px] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                          <Text
                            className="font-normal not-italic text-black_900 w-[auto]"
                            variant="body7"
                          >
                            Monthly amount:
                          </Text>
                          <Text
                            className="font-thin text-black_900 w-[auto]"
                            variant="body7"
                          >
                            N33,333.33
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[3px] ml-[6px] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                          <Text
                            className="font-normal not-italic text-black_900 w-[auto]"
                            variant="body7"
                          >
                            Forfeit Cost:
                          </Text>
                          <Text
                            className="font-thin sm:ml-[35px] md:ml-[45px] ml-[88px] text-black_900 w-[auto]"
                            variant="body7"
                          >
                            N4,999.95
                          </Text>
                        </div>
                        <Line className="bg-black_900 h-[1px] mt-[12px] sm:mt-[4px] md:mt-[6px] sm:w-[100%] w-[93%]" />
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[3px] ml-[6px] sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                          <Text
                            className="font-normal not-italic text-black_900 w-[auto]"
                            variant="body7"
                          >
                            Final amount:{" "}
                          </Text>
                          <Text
                            className="font-thin text-black_900 w-[auto]"
                            variant="body7"
                          >
                            N38,333.28
                          </Text>
                        </div>
                        <Text
                          className="font-light leading-[normal] sm:mt-[28px] md:mt-[37px] mt-[72px] text-black_900_63 w-[100%]"
                          variant="body10"
                        >
                          Note that the forfeit cost is the cost you pay for
                          choosing a particular payment plan, the lesser the
                          plan the lesser the forfeit fine. thi is to help
                          protect landlords from bankruptcy and capital lost.
                          Monthly forfeit cost is 15% of the monthly cost after
                          division.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-amber_500_66 flex flex-col items-end justify-end md:pl-[12px] sm:pl-[15px] pl-[24px] md:py-[12px] sm:py-[15px] py-[24px] w-[100%]">
                      <div className="flex flex-col justify-start mt-[14px] sm:mt-[5px] md:mt-[7px] sm:px-[0] w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                          <Text
                            className="font-normal not-italic text-black_900 w-[auto]"
                            variant="body7"
                          >
                            Annual amount:
                          </Text>
                          <Text
                            className="font-thin sm:ml-[22px] md:ml-[29px] ml-[57px] text-black_900 w-[auto]"
                            variant="body7"
                          >
                            N400,000
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-black_900 w-[auto]"
                            variant="body7"
                          >
                            Quarterly amount:
                          </Text>
                          <Text
                            className="font-thin sm:ml-[14px] md:ml-[19px] ml-[37px] text-black_900 w-[auto]"
                            variant="body7"
                          >
                            N100,000
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                          <Text
                            className="font-normal not-italic text-black_900 w-[auto]"
                            variant="body7"
                          >
                            Forfeit Cost:
                          </Text>
                          <Text
                            className="font-thin sm:ml-[35px] md:ml-[45px] ml-[88px] text-black_900 w-[auto]"
                            variant="body7"
                          >
                            N10,0000
                          </Text>
                        </div>
                        <Line className="bg-black_900 h-[1px] sm:mt-[1px] md:mt-[2px] mt-[5px] w-[100%]" />
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <Text
                            className="font-normal not-italic text-black_900 w-[auto]"
                            variant="body7"
                          >
                            Final amount:{" "}
                          </Text>
                          <Text
                            className="font-thin sm:ml-[30px] md:ml-[39px] ml-[76px] text-black_900 w-[auto]"
                            variant="body7"
                          >
                            N110,000
                          </Text>
                        </div>
                        <Text
                          className="font-light leading-[normal] sm:mt-[29px] md:mt-[38px] mt-[75px] text-black_900_63 w-[100%]"
                          variant="body10"
                        >
                          Note that the forfeit cost is the cost you pay for
                          choosing a particular payment plan, the lesser the
                          plan the lesser the forfeit fine. thi is to help
                          protect landlords from bankruptcy and capital lost.
                          Monthly forfeit cost is 10% of the quarterly cost
                          after division.
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap font-lato items-center justify-between sm:mt-[20px] md:mt-[26px] mt-[51px] w-[100%]">
                    <div className="flex flex-col items-center mb-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                      <div className="bg-blue_55 flex flex-col justify-start pb-[13px] sm:pb-[5px] md:pb-[6px] pl-[13px] sm:pl-[5px] md:pl-[6px] w-[100%]">
                        <Stack className="h-[42px] relative sm:w-[100%] w-[59%]">
                          <Radio
                            value="HalfPayment"
                            className="absolute bottom-[0] font-lato font-semibold sm:pl-[3px] md:pl-[4px] pl-[8px] pr-[4px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900 w-[100%]"
                            inputClassName="h-[20px] mr-[5px] w-[20px]"
                            checked={false}
                            name="LabelTwo"
                            label="Half Payment"
                          ></Radio>
                          <Text
                            className="absolute border border-red_500_7f border-solid font-normal font-overpass left-[24%] not-italic sm:pb-[3px] md:pb-[4px] pb-[8px] px-[12px] sm:px-[4px] md:px-[6px] rounded-radius4 text-red_500_99 top-[0] w-[auto]"
                            variant="body8"
                          >
                            Cancel
                          </Text>
                        </Stack>
                        <Text
                          className="font-fw leading-[18.00px] md:leading-[normal] sm:leading-[normal] md:mb-[10px] mb-[20px] sm:mb-[7px] md:ml-[20px] ml-[39px] sm:mx-[0] text-black_900 sm:w-[100%] w-[88%]"
                          variant="body10"
                        >
                          pay monthly and not worry about budgeting thereby
                          enjoying your home
                        </Text>
                      </div>
                      <div className="bg-amber_500_66 flex flex-col font-overpass items-end justify-end mt-[10px] sm:mt-[3px] md:mt-[5px] md:pl-[11px] sm:pl-[15px] pl-[23px] md:py-[11px] sm:py-[15px] py-[23px] w-[100%]">
                        <div className="flex flex-col justify-start mb-[1px] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:px-[0] w-[100%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                            <Text
                              className="font-normal not-italic text-black_900 w-[auto]"
                              variant="body7"
                            >
                              Annual amount:
                            </Text>
                            <Text
                              className="font-thin sm:ml-[22px] md:ml-[29px] ml-[57px] text-black_900 w-[auto]"
                              variant="body7"
                            >
                              N400,000
                            </Text>
                          </div>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                            <Text
                              className="font-normal not-italic text-black_900 w-[auto]"
                              variant="body7"
                            >
                              Monthly amount:
                            </Text>
                            <Text
                              className="font-thin sm:ml-[19px] md:ml-[25px] ml-[49px] text-black_900 w-[auto]"
                              variant="body7"
                            >
                              N200,000
                            </Text>
                          </div>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                            <Text
                              className="font-normal not-italic text-black_900 w-[auto]"
                              variant="body7"
                            >
                              Forfeit Cost:
                            </Text>
                            <Text
                              className="font-thin sm:ml-[35px] md:ml-[45px] ml-[88px] text-black_900 w-[auto]"
                              variant="body7"
                            >
                              N10,000
                            </Text>
                          </div>
                          <Line className="bg-black_900 h-[1px] sm:mt-[2px] md:mt-[3px] mt-[7px] w-[100%]" />
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-normal not-italic text-black_900 w-[auto]"
                              variant="body7"
                            >
                              Final amount:{" "}
                            </Text>
                            <Text
                              className="font-thin sm:ml-[30px] md:ml-[39px] ml-[76px] text-black_900 w-[auto]"
                              variant="body7"
                            >
                              N210,000
                            </Text>
                          </div>
                          <Text
                            className="font-light leading-[normal] sm:mt-[29px] md:mt-[38px] mt-[75px] text-black_900_63 w-[100%]"
                            variant="body10"
                          >
                            Note that the forfeit cost is the cost you pay for
                            choosing a particular payment plan, the lesser the
                            plan the lesser the forfeit fine. thi is to help
                            protect landlords from bankruptcy and capital lost.
                            Monthly forfeit cost is 5% of the quarterly cost
                            after division.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                      <div className="bg-blue_55 flex flex-col justify-center pl-[13px] sm:pl-[5px] md:pl-[6px] py-[13px] sm:py-[5px] md:py-[6px] w-[100%]">
                        <Radio
                          value="YearlyPayment"
                          className="font-semibold mr-[106px] sm:mr-[42px] md:mr-[54px] mt-[1px] sm:pl-[2px] md:pl-[3px] pl-[7px] pr-[4px] sm:text-[20px] md:text-[22px] text-[24px] text-gray_900"
                          inputClassName="h-[20px] mr-[5px] w-[20px]"
                          checked={false}
                          name="LabelThree"
                          label="Yearly Payment"
                        ></Radio>
                        <Text
                          className="font-fw leading-[18.00px] md:leading-[normal] sm:leading-[normal] md:mb-[10px] mb-[20px] sm:mb-[7px] md:ml-[20px] ml-[39px] sm:mx-[0] text-black_900 sm:w-[100%] w-[88%]"
                          variant="body10"
                        >
                          pay monthly and not worry about budgeting thereby
                          enjoying your home
                        </Text>
                      </div>
                      <div className="bg-amber_500_66 flex flex-row md:flex-wrap sm:flex-wrap font-overpass items-start justify-between md:p-[12px] sm:p-[15px] p-[24px] w-[100%]">
                        <Text
                          className="font-normal mt-[14px] sm:mt-[5px] md:mt-[7px] not-italic text-black_900 w-[auto]"
                          variant="body7"
                        >
                          Annual amount:
                        </Text>
                        <Text
                          className="font-thin md:mb-[128px] mb-[248px] sm:mb-[99px] mr-[4px] mt-[14px] sm:mt-[5px] md:mt-[7px] text-black_900 w-[auto]"
                          variant="body7"
                        >
                          N400,000
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="bg-indigo_400 font-lato font-normal sm:mr-[104px] md:mr-[134px] mr-[261px] sm:mt-[22px] md:mt-[28px] mt-[56px] not-italic py-[11px] sm:py-[4px] md:py-[5px] rounded-radius4 text-white_A700 w-[64px]"
                variant="body8"
              >
                Continue{" "}
              </Text>
              <footer className="bg-bluegray_100_7f font-overpass mt-[134px] sm:mt-[53px] md:mt-[69px] w-[100%]">
                <div className="flex flex-col justify-start max-w-[1804px] sm:mb-[19px] md:mb-[25px] mb-[49px] md:ml-[45px] ml-[auto] md:mr-[13px] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                      className="common-pointer sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[31px] md:mt-[40px] mt-[78px] sm:w-[12px] md:w-[16px] w-[32px]"
                      onClick={handleNavigate83}
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
        </div>
        <Img
          src="images/img_image2.png"
          className="absolute h-[269px] max-w-[100%] top-[6%] w-[100%]"
          alt="imageTwo"
        />
        <div className="absolute bg-indigo_A100_4f bottom-[1%] flex flex-col items-end justify-start sm:p-[15px] md:p-[261px] p-[507px] w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[374px] sm:mb-[380px] md:mb-[491px] mb-[953px] md:mr-[101px] mr-[197px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-white_A700 border-2 border-gray_500 border-solid flex flex-col justify-end p-[11px] sm:p-[4px] md:p-[5px] rounded-radius8 w-[100%]">
              <div
                className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between ml-[13px] md:ml-[6px] mt-[13px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]"
                onClick={handleNavigate30}
              >
                <Text
                  className="font-normal not-italic text-gray_900 w-[auto]"
                  variant="body4"
                >
                  Secure Payment
                </Text>
                <Button
                  className="flex sm:h-[13px] md:h-[17px] h-[32px] items-center justify-center rounded-radius50 sm:w-[12px] md:w-[16px] w-[32px]"
                  size="mdIcn"
                  variant="icbFillGray200"
                >
                  <Img
                    src="images/img_close.svg"
                    className="h-[18px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                    alt="close"
                  />
                </Button>
              </div>
              <Text
                className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] ml-[13px] md:ml-[6px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[93%]"
                variant="body8"
              >
                Click the ‘save’ botton to secure payment and proceed
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:ml-[103px] ml-[200px] sm:mt-[1px] md:mt-[2px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                <Button
                  className="cursor-pointer font-normal min-w-[49%] not-italic text-[16px] text-center text-red_500_99 w-[max-content]"
                  shape="RoundedBorder4"
                  variant="OutlineRed5007f"
                >
                  Cancel
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[41%] ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-[16px] text-center text-indigo_900 w-[max-content]"
                  shape="RoundedBorder4"
                >
                  Done
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Stack>
    </>
  );
};

export default PSecurePaymentPage;
