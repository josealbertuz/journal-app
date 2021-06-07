import { Center } from '@chakra-ui/layout';
import { CircularProgress } from '@chakra-ui/progress';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router';
import styled from 'styled-components'
import { addNote } from '../../api';
import { useNotes } from '../../hooks/useNotes';
import { NoteCard } from './NoteCard';


const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`;

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`;

export const NotesPage = () => {

    const history = useHistory();

    const queryClient = useQueryClient();

    const { isLoading, data : notes } = useNotes();

    const mutation = useMutation(() => addNote(), {
        onSuccess : ({ data }) => {
            queryClient.invalidateQueries('getAllNotes');
            history.push(`notes/${data.noteId}`);
        }
    });

    const handleAddNote = () => {
        mutation.mutate();
    }

    return (
        <Wrapper>
            {
                (isLoading) ? (
                    <Center>
                        <CircularProgress isIndeterminate />
                    </Center>
                ) : (
                    <Grid>
                        {
                            notes.map(note => 
                                <NoteCard 
                                    key={ note.id }
                                    note={ note }
                                />
                            )
                        }
                    </Grid>
                )
            }
            <Fab
                onClick={ handleAddNote } 
                children={ <Add /> }
                color="primary"
                style={{
                    position : 'absolute',
                    right : '5%',
                    top: 'auto',
                    bottom : '3%'
                }}
            />
        </Wrapper>
    )
}

