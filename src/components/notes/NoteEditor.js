import React from 'react';
import { useParams } from 'react-router'
import { useNote } from '../../hooks/useNote';
import { Center } from '@chakra-ui/layout';
import { CircularProgress } from '@chakra-ui/progress';
import { useMutation, useQueryClient } from 'react-query';
import { editNote, uploadImage } from '../../api';
import { NoteForm } from './NoteForm';


export const NoteEditor = () => {

    const { noteId } = useParams();

    const queryClient = useQueryClient();

    const { isFetching, data: note } = useNote(noteId);

    const editNoteMutation = useMutation((values) => editNote(values), {
        onSuccess: () => {
            queryClient.invalidateQueries([noteId, 'getNoteById']);
            queryClient.invalidateQueries('getAllNotes');
            
        }
    });


    const handleSubmit = (values) => {

        values.noteId = noteId;

        editNoteMutation.mutate(values);

    }

    const uploadFileMutation = useMutation((values) => uploadImage(values), {
        onSuccess: () => {
            queryClient.invalidateQueries([noteId, 'getNoteById']);
            queryClient.invalidateQueries('getAllNotes');
            
        }
    })

    const handleFiles = (e) => {

        const formData = new FormData();

        formData.append('img', e.target.files[0]);
        
        uploadFileMutation.mutate({
            noteId,
            formData
        });

    }

    return (
        (isFetching) ? (
            <Center>
                <CircularProgress isIndeterminate />
            </Center>
        ) : (
            <NoteForm 
                initialValues={{
                    title: note.title,
                    body: note.body
                }}
                handleSubmit={ handleSubmit }
                handleFiles={ handleFiles }
            />
        )
    );
}