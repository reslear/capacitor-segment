export interface CapacitorSegmentPlugin {
  initialize(options: InitializeOptions): Promise<void>;
  identify(options: IdentifyOptions): Promise<void>;
  track(options: TrackOptions): Promise<void>;
  page(options: PageOptions): Promise<void>;
  reset(): Promise<void>;
}

export type InitializeOptions = {
  key: string;
  trackLifecycle?: boolean;
};

export type Identity = { userId: string };

export type IdentifyOptions = Identity & {
  traits?: Record<string, unknown>;
  options?: Record<string, unknown>;
};

export type TrackOptions = {
  eventName: string;
  properties: Record<string, unknown>;
};

export type PageOptions = { pathname: string };
