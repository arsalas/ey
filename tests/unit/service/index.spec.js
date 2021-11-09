import { getGallery } from '@/services'

describe('api', () => {

    test('Debe retornar una array', async () => {
        const gallery = await getGallery();
        expect(gallery.length).toBeGreaterThanOrEqual(0);
    })

})