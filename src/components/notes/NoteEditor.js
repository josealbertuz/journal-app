import React from 'react';
import { useParams } from 'react-router'
import { useNote } from '../../hooks/useNote';
import { Center } from '@chakra-ui/layout';
import { CircularProgress } from '@chakra-ui/progress';
import { useMutation, useQueryClient } from 'react-query';
import { deleteImage, editNote, uploadImage } from '../../api';
import { NoteForm } from './NoteForm';
import { VStack } from '@chakra-ui/layout';
import { ImagesGrid } from './ImagesGrid';
import { Box } from '@chakra-ui/layout';


export const NoteEditor = () => {

    const { noteId } = useParams();

    const queryClient = useQueryClient();

    const { isFetching, data: note } = useNote(noteId);

    const editNoteMutation = useMutation((values) => editNote(values), {
        onSuccess: () => {
            queryClient.invalidateQueries(['getNoteById', noteId]);
            queryClient.invalidateQueries('getAllNotes');

        }
    });


    const handleSubmit = (values) => {

        values.noteId = noteId;

        editNoteMutation.mutate(values);

    }

    const uploadFileMutation = useMutation((values) => uploadImage(values), {
        onSuccess: () => {
            queryClient.invalidateQueries(['getNoteById', noteId]);
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

    const deleteFileMutation = useMutation((image) => deleteImage(image), {
        onSuccess: () => {
            queryClient.invalidateQueries(['getNoteById', noteId]);
            queryClient.invalidateQueries('getAllNotes');
        }
    });

    const handleDeleteImage = (image) => {
        deleteFileMutation.mutate(image);
    }

    return (
        (isFetching) ? (
            <Center>
                <CircularProgress isIndeterminate />
            </Center>
        ) : (
            <Box
                h="100%"
                overflowY="auto"
            >
                <VStack
                    padding={5}
                >
                    <ImagesGrid
                        handleDeleteImage={handleDeleteImage}
                        images={note.files}
                        boxSize={300}
                    />
                    <NoteForm
                        initialValues={{
                            title: note.title,
                            body: note.body
                        }}
                        handleSubmit={handleSubmit}
                        handleFiles={handleFiles}
                    />
                </VStack>
            </Box>
        )
    );
}