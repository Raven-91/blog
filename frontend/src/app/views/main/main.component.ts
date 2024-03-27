import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ArticleItemComponent} from "../../shared/common/article-item/article-item.component";
import {AccordionComponent} from "../../shared/common/accordion/accordion.component";
import {AccordionDataType} from "../../../types/accordion-data-type";
import {TranslateModule} from "@ngx-translate/core";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {SliderDataType} from "../../../types/slider-data-type";
import {SliderComponent} from "./slider/slider.component";
import {ArticleType} from "../../../types/article-type";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink,
    ArticleItemComponent,
    AccordionComponent,
    TranslateModule,
    LazyLoadImageModule,
    SliderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  accordionData: AccordionDataType[] = [
    {
      name: {
        en: 'Space',
        ru: 'Космос'
      },
      selected: true
    },
    {
      name: {
        en: 'Movies',
        ru: 'Фильмы'
      },
      selected: false
    },
    {
      name: {
        en: 'Computer games',
        ru: 'Компьютерные игры'
      }, selected: false
    },
    {
      name: {
        en: 'Call of Duty',
        ru: 'Call of Duty'
      }, selected: false
    },
    {
      name: {
        en: 'Moon',
        ru: 'Луна'
      }, selected: true
    },
    {
      name: {
        en: 'Moon',
        ru: 'Луна'
      }, selected: true
    },
    {
      name: {
        en: 'Moon',
        ru: 'Луна'
      }, selected: true
    },
    {
      name: {
        en: 'Moon',
        ru: 'Луна'
      }, selected: true
    }
  ]
  sliderData: SliderDataType[] = [
    {
      text: {
        en: 'New items in the gaming industry. Reviews and releases.',
        ru: 'Новинки игровой индустрии. Обзоры и релизы.'
      },
      image: 'slider/bg-game.jpeg',
      url: '/'
    },
    {
      text: {
        en: 'What to see in cinema this week: the best film premieres, reviews and release dates.',
        ru: 'Что посмотреть в кино на этой неделе: лучшие кинопремьеры, обзоры и даты выхода.'
      },
      image: 'slider/bg-movies.jpg',
      url: '/'
    },
    {
      text: {
        en: 'The mysterious world of wild nature.',
        ru: 'Загадочный мир дикой природы.'
      },
      image: 'slider/bg-animal.jpg',
      url: '/'
    },
    {
      text: {
        en: 'Secrets of space: opening the doors to the endless Universe.',
        ru: 'Тайны космоса: открываем двери в бескрайнюю Вселенную.'
      },
      image: 'slider/bg-space.jpg',
      url: '/'
    },
    {
      text: {
        en: 'The best places to relax.',
        ru: 'Лучшие места для отдыха.'
      },
      image: 'slider/bg-relax.jpg',
      url: '/'
    }
  ];
  articles: ArticleType[] = [
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
    {
      id: "123456789",
      author: "John Conor",
      date: "06.03.2024 21:17",
      subject: {
        en: "Innovation",
        ru: "Инновации"
      },
      title: {
        en: "Noteworthy technology acquisitions 2021",
        ru: "Примечательные технологические приобретения 2021 году"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!",
        ru: "Это текст на русском языке consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!. Lorem ipsum dolor sit amet, " +
          "consectetur adipisicing elit. Eos laboriosam modi mollitia sint unde? A accusamus,\n" +
          "  adipisci, atque cumque deleniti distinctio est eum labore nemo sed tempora temporibus tenetur, ullam!"
      },
      image: "http://localhost:4200/assets/images/image-sample.jpg",
      url: "",
      favorite: false,
      rating: 3,
      readonly: true,
      totalRate: 4.5,
      content: {
        en:
          "<div>\n" +
          "  It is English text\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<img src='http://localhost:4200/assets/images/image-sample.jpg' alt='image'>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",
        ru:
          "<div>\n" +
          "Это текст на русском языке\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda blanditiis consequatur cum, doloremque\n" +
          "  dolores esse ex, harum minus neque provident quam qui quia rem voluptatem! Eligendi fuga rem sapiente.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad aliquid, asperiores enim esse libero minus recusandae saepe ut vel? Adipisci aliquam amet cupiditate deleniti,\n" +
          "  dignissimos dolore earum, est excepturi facilis id ipsum sequi temporibus voluptas? Eum provident, rerum!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Ad adipisci aperiam at esse expedita fugiat molestias optio voluptatem. Aut et ipsum iusto. Consectetur harum iure\n" +
          "  nemo nulla, obcaecati omnis quia ratione rem reprehenderit suscipit velit, vero vitae? Sit.\n" +
          "</div>\n" +
          "<div>\n" +
          "  Aliquid cumque, cupiditate deleniti, dolores dolorum enim facere harum impedit laborum magnam molestiae nemo\n" +
          "  nesciunt quas quasi quis quo tempore! Atque consectetur deleniti fugiat ipsa ipsum minus repudiandae vel vitae!\n" +
          "</div>\n" +
          "<div>\n" +
          "  Distinctio error expedita laborum maxime mollitia suscipit tempore! Accusantium aperiam deleniti deserunt dolor,\n" +
          "  dolore eligendi facilis iure iusto nemo numquam omnis porro quam quasi quia recusandae, reiciendis, repellat tempore\n" +
          "  voluptatibus.\n" +
          "</div>",

      },
      comments: [],
    },
  ]

  search(params: string[]) {
    if (params && params.length > 0) {
      console.log(params);
    }
  }
}

