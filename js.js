// Abaixo os 4 links do YouTube (ou apenas os IDs) na ordem indicada:
var VIDEOS = [
  "https://youtu.be/dI0bxu9-3PE?si=MxhdgJmLn_Ylnsps", // 1. Aba 1: Family Link do zero
  "https://youtu.be/vA09MbxeFdM?si=KAFaUehq3IGbBeGw", // 2. Aba 2: Tempo de Uso no iPhone
  "https://youtu.be/d5rlO-OhkII?si=P-a4JgRw0VMTRKLU", // 3. Aba 3 (Vídeo 1): Desativar o Google Family Link
  "https://www.youtube.com/watch?v=dpGnlOW5ZxU"  // 4. Aba 3 (Vídeo 2): Desativar o Tempo de Uso (Apple)
];

// Abaixo o link completo da playlist do Google Family Link:
var PLAYLIST_FAMILY_LINK = "https://youtube.com/playlist?list=PLE6_m5iXoGvmuE3MhxjDoaZ3xwTW0N3A9&si=rRQh6hEL0vsWiu1i";

var CHEV = '<svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

var DATA = [
  {
    vt: "Vídeo: Family Link do zero, passo a passo",
    steps: [
      ["Instalar e vincular as contas", "<ul><li>Instale o app <b>Google Family Link</b> no celular dos pais (Android ou iPhone).</li><li>Entre com a Conta Google dos pais e crie ou vincule a conta da criança.</li><li>No celular do filho, entre com a conta dele e aceite a supervisão.</li></ul>"],
      ["Limites diários e hora de dormir", "<ul><li>Abra o perfil do filho e toque em <b>Controles &gt; Limites diários</b>.</li><li>Defina o tempo máximo por dia, separado para cada dia da semana, se quiser.</li><li>Em <b>Hora de dormir</b>, escolha o horário em que o aparelho fica bloqueado à noite.</li></ul>"],
      ["Bloquear apps e aprovar downloads", "<ul><li>Em <b>Limites de apps</b>, bloqueie ou limite apps específicos.</li><li>Na <b>Google Play</b>, ative a aprovação de downloads e compras para você decidir o que entra.</li></ul>"],
      ["Filtros de navegação", "<ul><li>Ative o <b>SafeSearch</b> na Pesquisa Google.</li><li>No <b>Chrome</b>, escolha “Tentar bloquear sites explícitos”.</li><li>Para crianças pequenas, use o <b>YouTube Kids</b> ou defina o nível de conteúdo no YouTube.</li></ul>"]
    ],
    al: ["Privacidade: o que o Family Link NÃO faz", "<ul><li>Não lê conversas de WhatsApp nem de outros apps.</li><li>Não espelha a tela do seu filho.</li><li>A partir dos 13 anos (a idade varia conforme a lei local), o adolescente pode escolher encerrar a supervisão.</li></ul>"]
  },
  {
    vt: "Vídeo: Tempo de Uso no iPhone, passo a passo",
    steps: [
      ["Compartilhamento Familiar ou configuração local", "<ul><li>Com <b>Compartilhamento Familiar</b>: em Ajustes, toque no seu nome &gt; Compartilhamento Familiar e adicione a criança.</li><li>Sem ele: abra <b>Ajustes &gt; Tempo de Uso</b> direto no iPhone do filho e escolha “Este é o iPhone do meu filho”.</li></ul>"],
      ["Criar o Código do Tempo de Uso", "<ul><li>Em Tempo de Uso, toque em <b>Usar Código do Tempo de Uso</b>.</li><li>Crie um código de 4 dígitos que a criança não conheça e anote em local seguro.</li></ul>"],
      ["Repouso e limites de apps", "<ul><li>Em <b>Repouso</b>, defina o horário de dormir.</li><li>Em <b>Limites de Apps</b>, escolha categorias ou apps e o tempo diário.</li></ul>"],
      ["Conteúdo e compras na App Store", "<ul><li>Em <b>Restrições de Conteúdo e Privacidade</b>, escolha o que pode ser acessado.</li><li>Em Compras na iTunes e App Store, mantenha <b>Pedir para Comprar</b> ativo.</li></ul>"]
    ],
    al: ["Lembrete do sistema: localização", "<p style='margin:0'>A localização <b>não</b> fica no Tempo de Uso. Para ver onde seu filho está, use o aplicativo <b>Buscar</b> (Find My).</p>"]
  },
  {
    vt: [
      "Vídeo: como desativar o Google Family Link",
      "Vídeo: como desativar o Tempo de Uso (Apple)"
    ],
    steps: [
      ["Desativar o Google Family Link", "<ul><li>No celular dos pais, abra o Family Link e selecione o filho.</li><li>Toque em <b>Controles &gt; Configurações da conta &gt; Informações da conta</b>.</li><li>Toque em <b>Interromper supervisão</b> e confirme.</li><li><b>Menores de 13 anos</b> (a idade varia pela lei local): não dá para só remover a supervisão e manter a conta. Será preciso excluir a Conta Google da criança ou formatar o aparelho. Aos 13, ela mesma recebe a opção de encerrar.</li></ul>"],
      ["Desativar o Tempo de Uso (Apple)", "<ul><li><b>iPhone dos pais</b> (Compartilhamento Familiar): Ajustes &gt; Tempo de Uso &gt; nome do filho &gt; role até o fim &gt; <b>Desativar Tempo de Uso</b>.</li><li><b>iPhone do filho</b> (configuração local): Ajustes &gt; Tempo de Uso &gt; <b>Desativar Tempo de Uso</b> e digite o código de 4 dígitos.</li></ul>"]
    ],
    table: true
  }
];

var TABLE = [
  ["Cenário da família", "Family Link (Google)", "Tempo de Uso (Apple)"],
  ["Filho com iPhone e pais com Android", "Não bloqueia o aparelho. Até pode ser instalado no iPhone, mas só filtra buscas do Google e o YouTube: sem limite geral de tempo e sem bloquear outros apps.", "Sem controle remoto: não existe app “Tempo de Uso” para Android. Será preciso configurar direto no iPhone da criança, com senha local."],
  ["Filho com Android e pais com iPhone", "Funciona perfeitamente. O app Family Link para pais existe na App Store e controla 100% o Android do filho à distância.", "Impossível usar: o Tempo de Uso é exclusivo do iOS."],
  ["Filho usa PC com Windows", "Muito limitado. Funciona em Chromebooks; no Windows só vale para o navegador Chrome logado na conta e não bloqueia jogos ou programas.", "Impossível usar: a Apple não integra o Tempo de Uso ao Windows. Dica: use o “Microsoft Family Safety”."]
];

var DLS = [
  ["Manual completo – Google Family Link", "documentos/MTS_ Guia Completo Google Family Link.pdf"],
  ["Manual completo – Tempo de Uso Apple", "documentos/MTS_ Guia Completo Tempo de Uso (Apple).pdf"],
  ["Guia rápido de incompatibilidades e desativação", "documentos/MTS_ Como Desativar e Incompatibilidades.pdf"]
];

var P = document.getElementById("p"), tabs = [].slice.call(document.querySelectorAll(".tab"));

function extrairIdYT(url) {
  if (!url) return "";
  url = url.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
  var m = url.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|shorts\/|live\/))([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : "";
}

function accordion(steps, numbered) {
  var h = '';
  steps.forEach(function (s, i) {
    h += '<div class="acc"><h3 style="margin:0"><button type="button" aria-expanded="' + (i == 0) + '" aria-controls="b' + i + '" id="h' + i + '"><span class="n">' + (numbered ? i + 1 : '•') + '</span><span>' + s[0] + '</span>' + CHEV + '</button></h3><div class="body" id="b' + i + '" role="region" aria-labelledby="h' + i + '"' + (i == 0 ? '' : ' hidden') + '>' + s[1] + '</div></div>';
  });
  return h;
}

function render(i) {
  var d = DATA[i];
  var listaVideos = i < 2 ? [VIDEOS[i]] : VIDEOS.slice(2);
  var titulos = Array.isArray(d.vt) ? d.vt : [d.vt];

  var vid = '<div>' + listaVideos.map(function (url, idx) {
    var v = extrairIdYT(url);
    var titulo = titulos[idx] || titulos[0];
    var espaco = idx > 0 ? ' style="margin-top:20px"' : '';
    var playlist = (i === 0 && idx === 0 && PLAYLIST_FAMILY_LINK.trim())
      ? '<p style="margin:8px 0 0"><a href="' + PLAYLIST_FAMILY_LINK.trim() + '" target="_blank" rel="noopener noreferrer">Playlist Completa do Google Family Link, clique aqui para assistir!</a></p>'
      : '';
    return '<div' + espaco + '><div class="video">' + (v ? '<iframe src="https://www.youtube-nocookie.com/embed/' + v + '" title="' + titulo + '" allowfullscreen loading="lazy"></iframe>' : '<p style="margin:0">O vídeo desta aba será exibido aqui.</p>') + '</div><p class="cap">' + titulo + '</p>' + playlist + '</div>';
  }).join('') + '</div>';

  var h = vid + '<div>' + accordion(d.steps, i < 2) + '</div>';
  if (d.al) h += '<div class="alert full" role="note"><h3>' + d.al[0] + '</h3>' + d.al[1] + '</div>';
  if (d.table) {
    h += '<div class="full"><h3>Onde cada ferramenta funciona</h3><div class="tw" tabindex="0" role="region" aria-label="Tabela de incompatibilidades"><table><thead><tr>' + TABLE[0].map(function (c) { return '<th scope="col">' + c + '</th>' }).join('') + '</tr></thead><tbody>' + TABLE.slice(1).map(function (r) { return '<tr><th scope="row">' + r[0] + '</th><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>' }).join('') + '</tbody></table></div><div class="alert" style="margin-top:20px" role="note"><h3>Regra de ouro</h3><ul><li>Para supervisionar aparelhos <b>Android</b>, use o Family Link, seja qual for o celular dos pais.</li><li>Para <b>iPhone/iPad</b>, só o Tempo de Uso da Apple bloqueia de verdade. Com pais no Android, será preciso ajustar as regras direto no aparelho da criança.</li></ul></div></div>';
  }
  P.innerHTML = h;
  P.setAttribute("aria-labelledby", "t" + i);
  P.querySelectorAll(".acc button").forEach(function (b) {
    b.addEventListener("click", function () {
      var o = b.getAttribute("aria-expanded") == "true";
      b.setAttribute("aria-expanded", !o);
      document.getElementById(b.getAttribute("aria-controls")).hidden = o;
    });
  });
}

function sel(i, f) {
  tabs.forEach(function (t, j) {
    t.setAttribute("aria-selected", j == i);
    t.tabIndex = j == i ? 0 : -1;
  });
  render(i);
  if (f) tabs[i].focus();
}

tabs.forEach(function (t, i) {
  t.addEventListener("click", function () { sel(i); });
  t.addEventListener("keydown", function (e) {
    var k = e.key, n = null;
    if (k == "ArrowRight") n = (i + 1) % 3;
    if (k == "ArrowLeft") n = (i + 2) % 3;
    if (k == "Home") n = 0;
    if (k == "End") n = 2;
    if (n !== null) { e.preventDefault(); sel(n, true); }
  });
});

sel(0);

document.getElementById("dl").innerHTML = DLS.map(function (d) {
  return '<div class="card"><div class="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg></div><h3>' + d[0] + ' (PDF)</h3><a class="btn btn-p" href="' + d[1] + '" download>Baixar PDF</a></div>';
}).join('');

document.getElementById("ano").textContent = new Date().getFullYear();