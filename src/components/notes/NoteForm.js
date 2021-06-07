import React from 'react';
import { VStack } from '@chakra-ui/layout';
import { Formik } from 'formik';
import styled from 'styled-components';
import { Flex } from '@chakra-ui/layout';
import { UploadButton } from '../ui/UploadButton';
import { Input } from '@chakra-ui/input';
import { TextareaAutosize } from '@material-ui/core';
import { EditButton } from './EditButton';

const Form = styled.form`
    width: 100%;
`;

const TextArea = styled(TextareaAutosize)`
    width: 100%;
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
    &:focus {
        outline: none;
    }
`

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
                                <TextArea 
                                    name="body"
                                    onChange={props.handleChange}
                                    value={props.values.body}
                                    placeholder="body"
                                />
                            </VStack>
                            <EditButton />
                        </Form>
                    )
                }
            </Formik>
    )
}
