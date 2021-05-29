import React from 'react';
import { Button } from '@chakra-ui/button';
import { VStack } from '@chakra-ui/layout';
import { Edit } from '@material-ui/icons';
import { Formik } from 'formik';
import styled from 'styled-components';
import { Textarea } from '@chakra-ui/textarea';
import { ImagesGrid } from '../notes/ImagesGrid';
import { Flex } from '@chakra-ui/layout';
import { UploadButton } from '../ui/UploadButton';
import { Input } from '@chakra-ui/input';

const Form = styled.form`
    height: 100%;
    width: 100%;
    padding: 2%;
    overflow: auto;
`;

export const NoteForm = ({ initialValues, handleSubmit, handleFiles }) => {
    return (
        <Formik
                initialValues={ initialValues }
                onSubmit={ handleSubmit }
            >
                {
                    props => (
                        <Form onSubmit={props.handleSubmit} >
                            <VStack
                                padding={5}
                                alignItems="flex-end"
                            >
                                <Flex
                                    w="100%"
                                    justify="space-between"
                                >
                                <UploadButton 
                                    handleFiles={ handleFiles }
                                />       
                                <Button
                                    type="submit"
                                    leftIcon={<Edit />}
                                >Edit</Button>
                                </Flex>
                                <Input
                                    fontSize="1.5rem"
                                    fontWeight="bold"
                                    border="none"
                                    _focus="none"
                                    name="title"
                                    onChange={props.handleChange}
                                    value={props.values.title}
                                    placeholder="title"
                                    size="lg" />
                                <Textarea
                                    fontSize="1rem"
                                    border="none"
                                    _focus="none"
                                    name="body"
                                    onChange={props.handleChange}
                                    value={props.values.body}
                                    placeholder="Body"
                                    size="lg"
                                />
                                <ImagesGrid />
                            </VStack>
                        </Form>
                    )
                }
            </Formik>
    )
}
