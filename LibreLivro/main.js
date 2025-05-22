function abrirModal(imagemSrc, link, sinopse) {
    document.getElementById('modalImagem').src = imagemSrc;
    document.getElementById('modalLink').href = link;
    document.getElementById('modalSinopse').textContent = sinopse;
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modalMensagem').value = '';
    document.getElementById('modalMensagem').disabled = false;
    document.querySelector('.modal-form button').disabled = false;
    document.getElementById('modalConfirmacao').classList.add('escondido');

    // Resetar avaliação
    const estrelas = document.querySelectorAll('#modalRating input');
    estrelas.forEach(estrela => estrela.checked = false);
}