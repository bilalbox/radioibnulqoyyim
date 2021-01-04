const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const archiveDotOrgUrl = `https://archive.org/details/@radioibnulqoyyim`

const getUploads = async (archiveUrl) => {
    return axios.get(archiveUrl)
        .then((response) => {
            const dom = new JSDOM(response.data);
            let itemIds = []
            dom.window.document.querySelectorAll('div.item-ia').forEach(link => {
                const dataId = link.attributes.getNamedItem('data-id').value
                if (dataId !== '__mobile_header__') { itemIds.push(dataId) }
            });
            return itemIds
        })
        .catch(error => console.log(error))
}

const getArchiveData = itemIds => Promise.all(
    itemIds.map(async itemId => {
        const seriData = await axios
            .get(`https://archive.org/metadata/${itemId}`)
            .then(function (response) {
                const title = response.data.metadata.title
                const description = response.data.metadata.description
                const category = response.data.metadata.subject[0].toUpperCase()
                const zipUrl = `https://archive.org/compress/${itemId}/formats=VBR%20MP3&file=/${itemId}.zip`
                const files = response.data.files
                    .filter((f) => f.format === 'VBR MP3')
                    .map((ff) => ({
                        judul: ff.title,
                        url: `https://archive.org/download/${itemId}/${ff.name}`,
                        pemateri: ff.creator,
                        seri: ff.album,
                    }))
                return ({
                    title,
                    category,
                    description,
                    files,
                    zipUrl,
                })
            })
            .catch(function (error) {
                console.log(error)
            })

        return seriData
    })
)

exports.createPages = async ({ actions: { createPage } }) => {
    const itemIds = await getUploads(archiveDotOrgUrl);
    const allArchiveItems = await getArchiveData(itemIds)
    createPage({
        path: `/archive`,
        component: require.resolve('./src/templates/archive.jsx'),
        context: { allArchiveItems }
    });
};