import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import CurrencyConversionRate from "./components/CurrencyConversionRate";
import CurrencySelection from "./components/CurrencySelection";
import data from "./expenseApi.json";

function App() {
  const [currencyRates, setCurrencyRates] = useState([]);
  const [currencyOptions1, setCurrencyOptions1] = useState(null);
  const [currencyOptions2, setCurrencyOptions2] = useState(null);
  const [currencyAmount1, setCurrencyAmount1] = useState("");
  const [currencyAmount2, setCurrencyAmount2] = useState("");
  console.log(currencyOptions1);

  //获取汇率
  const fetchCurrencyRates = async () => {
    try {
      const response = await fetch(
        "https://v6.exchangerate-api.com/v6/2a8e077386a36e39a19ae9d8/latest/USD"
      );
      const data = await response.json();
      //const apiTest = data.conversion_rates;
      //setCurrencyRates(apiTest);
      setCurrencyRates(data.conversion_rates);
    } catch (error) {
      console.log(error);
    }
  };

  //监听货币一的变化
  useEffect(() => {
    if (currencyOptions1 && currencyOptions2 && currencyAmount1) {
      convertCurrency(currencyAmount1, currencyOptions1, currencyOptions2);
    }
  }, [currencyAmount1, currencyOptions1, currencyOptions2]);

  //获取汇率数据
  useEffect(() => {
    fetchCurrencyRates();
  }, []);

  //转换货币 1 到 2 的函数
  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    if (!currencyRates || !fromCurrency || !toCurrency) return;

    const rateFrom = currencyRates[fromCurrency.value.replace(/[\u4e00-\u9fa5]/g, '').trim()]; //获取货币一的汇率
    const rateTo = currencyRates[toCurrency.value.replace(/[\u4e00-\u9fa5]/g, '').trim()]; //获取货币二的汇率

    const convertedAmount = (amount * rateTo) / rateFrom; //计算转换后的货币
    setCurrencyAmount2(convertedAmount.toFixed(2));
  };

  //交换货币 1 和 货币 2的位置
  const exchangeCurrencies = () => {
    const temp = currencyOptions1;
    setCurrencyOptions1(currencyOptions2);
    setCurrencyOptions2(temp);
  };

  

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      bg={"gray.500"}
    >
      <Flex
        mt={"2rem"}
        flexDirection={"column"}
        width={"430px"}
        height={"700px"}
        mx={"1rem"}
        border={"3px solid black"}
        borderRadius={"20px"}
        boxShadow={"10px 10px #000"}
        bg={"#fff"}
        padding={"40px 5px"}
        transition={"all .5s"}
      >
        <Heading
          textDecoration={"underline"}
          textUnderlineOffset={".5rem"}
          cursor={"pointer"}
          mb={"1rem"}
        >
          兑换器
        </Heading>
        {/* 货币一 */}
        <Box marginBottom={"1rem"}>
          <Flex>
            <Box width={"60%"}>
              <CurrencySelection
                value={currencyOptions1}
                onChange={(selectedOption) =>
                  setCurrencyOptions1(selectedOption)
                }
              />
            </Box>
            <Box width={"40%"}>
              <Input
                variant="flushed"
                placeholder="0"
                textAlign={"right"}
                fontWeight={"bold"}
                paddingRight={".5rem"}
                value={currencyAmount1}
                onChange={(e) => setCurrencyAmount1(e.target.value)}
                type="number"
              />
            </Box>
          </Flex>
        </Box>
        {/* 交换货币 */}
        <Box mx={"auto"} mb={"1rem"}>
          <Button
            colorScheme="blue"
            color={"white"}
            onClick={exchangeCurrencies}
          >
            上下交换
          </Button>
        </Box>
        {/* 货币二 */}
        <Box mb={"1rem"}>
          <Flex>
            <Box width={"60%"}>
              <CurrencySelection
                value={currencyOptions2}
                onChange={(selectedOption) =>
                  setCurrencyOptions2(selectedOption)
                }
              />
            </Box>
            <Box width={"40%"}>
              <Input
                variant="flushed"
                placeholder="0"
                fontWeight={"bold"}
                textAlign={"right"}
                paddingRight={".5rem"}
                value={currencyAmount2}
                readOnly
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          {currencyOptions1 && currencyOptions2 && (
            <CurrencyConversionRate
              currencyOptions1={currencyOptions1}
              currencyOptions2={currencyOptions2}
            />
          )}
        </Box>
      </Flex>
      <Text mt={"1rem"}>Made with ❤️ by MoHie</Text>
      <Text mt={"1rem"}>Use Chakra UI & React & ExchangeRate API & React-Select</Text>
      <Text mt={"1rem"}>Thanks...</Text>
    </Flex>
    
  );
}

export default App;
