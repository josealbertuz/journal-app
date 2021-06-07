import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';
import { Card, CardActions, CardContent } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { deleteNote } from '../../api';
import { ImagesGrid } from './ImagesGrid';


const Container = styled.div`
    padding: 1rem;

    @media (max-width: 600px){
        flex-grow: 1;
    }

    @media (min-width: 756px){
        width: 370px;
    }

`;

export const NoteCard = ({ note }) => {

    const history = useHistory();

    const queryClient = useQueryClient();

    const mutation = useMutation((noteId) => deleteNote(noteId), {
        onSuccess: () => {
            queryClient.invalidateQueries('getAllNotes');
        }
    });

    const handleClickEdit = () => {

        history.push(`/notes/${note.id}`);

    }

    const handleClickDelete = () => {
        mutation.mutate(note.id);
    }


    return (
        <Container>
            <Card>
                <CardContent>
                    {
                        (note.files.length > 0) && <ImagesGrid
                            images={note.files}
                            filter={(note.files.length > 4)}
                        />
                    }
                    <Text
                        marginY={3}
                        as="b"
                        noOfLines={1}
                        isTruncated
                    >{note.title}</Text>

                    <Text
                        noOfLines={3}
                    >{note.body}</Text>
                </CardContent>
                <CardActions
                    style={{
                        justifyContent: 'flex-end'
                    }}
                >
                    <Button
                        size="sm"
                        onClick={handleClickEdit}
                    >
                        More
                </Button>
                    <Button
                        size="sm"
                        leftIcon={<Delete />}
                        color="white"
                        bg="red.600"
                        _hover={{
                            backgroundColor: 'red.500'
                        }}
                        onClick={handleClickDelete}
                    >
                        Delete
                </Button>
                </CardActions>
            </Card>
        </Container>
    )
}
