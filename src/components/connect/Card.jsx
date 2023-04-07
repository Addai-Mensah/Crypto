import React from 'react'

import { useDisclosure } from '@chakra-ui/react'

import {
    Modal,
    Input,
    Button,
    FormControl,
    FormLabel,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

function Card({ item }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <div>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Connect Wallet</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <img src={item.img} alt="" />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <div>
                <div className="mb-[2rem]">
                    <img onClick={onOpen} className="sm:w-[5rem] w-[3rem] mb-[0.2rem] mx-auto " key={item.id} src={item.img} alt="" />
                    <h7 className="text-[0.7rem] flex items-center justify-center" key={item.id}>{item.name}</h7>
                </div>
            </div>
        </div>
    )
}

export default Card