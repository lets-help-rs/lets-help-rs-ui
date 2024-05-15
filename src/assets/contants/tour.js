export const TOUR_STEPS = [
  {
    selector: "#header-logo",
    content:
      'Seja Bem-vindo(a) ao "Let\'s Help RS"! Aqui você encontrará os pontos de coleta da região desejada, facilitando assim, o acesso aos pontos para fazer doações e ajudar nesse processo.',
  },
  {
    selector: '[placeholder="Procure por um endereço"]',
    content:
      "Procure aqui pelo endereço desejado, caso não seja ele o presente no mapa no momento. Por padrão, o sistema leva em consideração sua localização atual para mostrar os pontos de coleta mais próximos.",
  },
  {
    selector: "#qr-code-section",
    content:
      "Também não esqueça que sempre é possível doar para as campanhas de arrecadações coletivas.",
  },
  {
    selector: "body",
    content:
      "No mapa serão exibidas as localizações dos pontos de coleta já registrados e validados na plataforma.",
  },
  {
    selector: "#add-marker-button",
    content:
      "Clique nesse botão, e em seguida em um ponto no mapa para criar um novo ponto de coleta, clique novamente para cancelar a ação.",
  },
  {
    selector: "#help-button",
    content:
      "Clique aqui se precisar que esse tour seja exibido novamente. Por padrão, ele não será exibido novamente.",
  },
];

export const TOUR_STYLES = {
  badge: (base) => ({
    ...base,
    backgroundColor: "red",
  }),
  dot: (base) => ({
    ...base,
    backgroundColor: "red",
    color: "red",
  }),
};
