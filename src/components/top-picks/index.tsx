import { ComponentProps, useMemo } from 'react'
import {
    Table, 
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Heading,
    Icon,
    IconButton,
    VStack,
    Flex
} from '@chakra-ui/react'
import { useTable, Column } from 'react-table'
import { FaShoppingCart } from 'react-icons/fa'

import { Image } from 'components/image'
import { Pick } from 'types/pick'
import { topPicks } from './pick-data'
import { brandRing } from 'src/utils/brandRing'

const HeaderCell = ({ value }: {value:string}) => (
    <Heading
     size='xs'
     textTransform={'none'}
     color='gray.light'
    >
        {value}

    </Heading>
)

export const TopPicks = (props: ComponentProps<typeof VStack>) => {
    const data = useMemo(() => topPicks, [])
    const columns = useMemo<Column<Pick>[]>(() => [{
        accessor: 'image',
        width: '100px',
        Cell: ({ value }) => (
            <VStack alignItems="flex-start" justifyContent='center'>
                <Image 
                    src={value}
                    width={8}
                    height={8}
                    minWidth={8}
                    minHeight={8}
                    rounded='xl'
                    objectFit='cover'
                    quality='75'
                    alt='name'
                />
            </VStack>
        ),
    }, {
        Header: () => <HeaderCell value="Name"/>,
        accessor:'name'
    }, {
        Header: () => <HeaderCell value="Producer"/>,
        accessor:'producer'
    }, {
        Header: () => <HeaderCell value='Categpry'/>,
        accessor:'category'
    }, {
        Header:() => <HeaderCell value='Time' />,
        accessor:'time',
        width:'40px'
    }, {
        Header: () => <HeaderCell value='Buy' />,
        id:'buy',
        width:'40px',
        Cell:() => (
            <IconButton
            icon={<FaShoppingCart/>}
            aria-label="Buy Song"
            rounded='full'
            {... brandRing}
            />
        )
    }


], []);

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
} = useTable({ columns, data})

    return (
        <VStack align='flex-start' height='full' {...props}>
            <Heading>Top Picks</Heading>
            <Flex overflow='auto' width='full'>
                <Table {...getTableProps()} position='relative'>
                    <Thead>
                        {headerGroups.map((headerGroups) => (
                            <Tr {...headerGroups.getHeaderGroupProps()}>
                                {headerGroups.headers.map((column) => (
                                    <Th 
                                        width={column.width} 
                                        {...column.getHeaderProps()}
                                        borderBottom={0}
                                        position='sticky'
                                        zindex='banner'
                                        top={0}
                                        bg='black'
                                        >
                                            {column.render("Header")}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return(
                                <Tr 
                                    {...row.getRowProps()}
                                    transition='ease-out'
                                    transitionProperty={'background'}
                                    transitionDuration='normal'
                                    _hover={{
                                        background: 'gray.dark',
                                        cursor:'pointer'
                                    }}
                                    textColor='whiteAlpha.700'
                                >
                                    {row.cells.map((cell) => (
                                        <Td 
                                            {...cell.getCellProps()}
                                            py={2}
                                            borderBottom={0}
                                            paddingInlineEnd={0}
                                            midWIdth={cell.column.width}
                                        >
                                            {cell.render("Cell")}

                                        </Td>
                                    ))}

                                </Tr>
                            )
                        })}

                    </Tbody>

                </Table>
            </Flex>
        </VStack>
    )
}