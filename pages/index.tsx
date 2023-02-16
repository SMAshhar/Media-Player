import {VStack} from "@chakra-ui/react"
import { Content } from "components/content"


const IndexPage = () => (
    <VStack
      height={"100vh"}
      bg='black'
      width={'full'}
      overflow='hidden'
      spacing={0}
    >
      <Content />
      {/* {COntent} */}
      {/* {Player} */}
    </VStack>
)

export default IndexPage
