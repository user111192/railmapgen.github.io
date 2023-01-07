import {
    Button,
    HStack,
    ListItem,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { useTranslation } from 'react-i18next';

interface CookiesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CookiesModal(props: CookiesModalProps) {
    const { isOpen, onClose } = props;

    const { t } = useTranslation();

    const handleAccept = () => {
        rmgRuntime.allowAnalytics(true);
        onClose();
    };

    const handleReject = () => {
        const allowAnalyticsResponse = rmgRuntime.allowAnalytics(false);
        if (allowAnalyticsResponse.refreshRequired) {
            window.location.reload();
        } else {
            onClose();
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => {
                // modal must not close unless using allow or reject button
            }}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{t('CookiesModal.header')}</ModalHeader>
                <ModalBody>
                    <Text>{t('CookiesModal.text1')}</Text>

                    <Text mt={2}>{t('CookiesModal.text2')}</Text>

                    <UnorderedList>
                        <ListItem> {t('CookiesModal.item1')}</ListItem>
                    </UnorderedList>

                    <Text mt={2}>{t('CookiesModal.text3')}</Text>
                </ModalBody>
                <ModalFooter>
                    <HStack>
                        <Button variant="ghost" onClick={handleReject}>
                            {t('CookiesModal.reject')}
                        </Button>
                        <Button colorScheme="primary" onClick={handleAccept}>
                            {t('CookiesModal.accept')}
                        </Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
