import { useState } from "react";
import { Check, ChevronDown, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/components/language-provider";
import { languages } from "@/lib/translation";
import dora from "@/assets/csr/mentoring-girl.png";
export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { language, selectLanguage, loading, error } = useLanguage();
  const selected = languages.find((item) => item.code === language);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="language-trigger"
          aria-label="Select your language"
          aria-busy={loading}
        >
          <span translate="no">{selected?.short}</span>
          {loading ? (
            <LoaderCircle className="language-spinner" aria-hidden="true" />
          ) : (
            <ChevronDown aria-hidden="true" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="language-panel">
        <DialogTitle className="language-title">Select your language</DialogTitle>
        <DialogDescription className="sr-only">Language</DialogDescription>
        <img className="language-dora" src={dora} alt="" aria-hidden="true" />
        <div className="language-list" translate="no">
          {languages.map((item) => (
            <Button
              key={item.code}
              variant="ghost"
              lang={item.code}
              className={`language-option ${item.code === language ? "is-selected" : ""}`}
              aria-pressed={item.code === language}
              disabled={loading}
              onClick={() => {
                selectLanguage(item.code);
                setOpen(false);
              }}
            >
              <span>{item.label}</span>
              {item.code === language && <Check aria-hidden="true" />}
            </Button>
          ))}
        </div>
        {error && (
          <p role="alert" className="language-error">
            {error}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
