
export enum WishCategory {
  PRAYER = 'Prayer',
  ADVICE = 'Advice',
  CONGRATULATIONS = 'Congratulations'
}

export enum GiftStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export interface Wedding {
  id: string;
  slug: string;
  partner1_name: string;
  partner2_name: string;
  wedding_date: string;
  hero_image_url: string;
  how_we_met: {
    title: string;
    content: string;
    image_url: string;
  };
  our_journey: {
    date: string;
    event: string;
    image_url: string;
  }[];
  proposal_story: {
    content: string;
    image_url: string;
  };
  traditional_wedding: {
    date: string;
    venue: string;
    image_url?: string;
  };
  white_wedding: {
    date: string;
    venue: string;
    image_url?: string;
  };
  reception: {
    date: string;
    venue: string;
    image_url?: string;
  };
  wedding_party: {
    name: string;
    role: string;
    image_url: string;
  }[];
  theme: string;
  published: boolean;
  view_count: number;
}

export interface Wish {
  id: string;
  guest_name?: string;
  message: string;
  category: WishCategory;
  is_public: boolean;
  is_favorite: boolean;
  created_at: string;
}

export interface Gift {
  id: string;
  donor_name: string;
  amount: number;
  message?: string;
  status: GiftStatus;
  created_at: string;
}
