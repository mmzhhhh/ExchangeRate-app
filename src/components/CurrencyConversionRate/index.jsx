import { Box, Flex, Text } from "@chakra-ui/react";
export default function CurrencyConversionRate({
  currencyOptions1,
  currencyOptions2,
}) {
  return (
    <Box flexDirection={"row"}>
      <Flex
        mb={"20px"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        border={"2px solid black"}
        borderRadius={"30px"}
        padding={"10px"}
        mx={"1rem"}
        transition={"all 0.3s ease"}
        _hover={{boxShadow:"10px 10px rgba(0, 0, 0)"}}
      >
        <Text
          className={currencyOptions1.icon}
          style={{
            marginRight: "10px", // 为图标与文字之间添加一些空间
            width: "100px", // 控制图标大小
            height: "100px",
            display: "inline-block",
          }}
        ></Text>
        <Text textDecoration={"underline"} textUnderlineOffset={"10px"} fontWeight={"bold"}>
          {currencyOptions1.label}
        </Text>
      </Flex>
      <Flex
        mb={"20px"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        border={"2px solid black"}
        borderRadius={"30px"}
        padding={"10px"}
        mx={"1rem"}
        fontWeight={"bold"}
        transition={"all 0.3s ease"}
        _hover={{boxShadow:"10px 10px rgba(0, 0, 0)"}}
      >
        <Text
          className={currencyOptions2.icon}
          style={{
            marginRight: "10px", // 为图标与文字之间添加一些空间
            width: "100px", // 控制图标大小
            height: "100px",
            display: "inline-block",
          }}
        ></Text>
        <Text textDecoration={"underline"} textUnderlineOffset={"10px"}>
          {currencyOptions2.label}
        </Text>
      </Flex>
    </Box>
  );
}
